import { disableAuth, isFetchMocked } from '@renderer/config';
import { logout } from '@renderer/contexts/auth';
import { getSetting } from '@renderer/helpers/settings';
import { z } from 'zod';
import {
	ApiError,
	AuthError,
	ConnectionError,
	getCatchMessage,
} from '@shared/errors';
import { dbDataSorter } from '@shared/helpers/schema';

import type { timestampSchema } from '@shared/helpers/schema';
import type { Utils } from '@shared/types/utils';


const responseSchema = z.strictObject({
	errorCode: z.string(),
	errorDescription: z.string(),
	data: z.unknown().optional(),
});

/**
 * the helper to send a request to the backend
 * @param apiPath the path of the api request
 * @param method the method of the current request. defaults to `GET`
 * @param body the body to sen with the request
 * @param isPublic is the request to a public endpoint? auth header will be excluded if `true`
 */
const apiRequest = async <Response = unknown>(
	apiPath: string,
	method: 'GET' | 'PATCH' | 'PUT' | 'POST' | 'DELETE',
	body?: Obj | Obj[] | FormData,
	isPublic: boolean = false,
): Promise<Response> => {
	try {
		if (!isFetchMocked && !navigator.onLine)
			throw new ConnectionError('not connected to the internet!');

		const options: Omit<RequestInit, 'headers'> & {
			headers: Record<string, any>;
		} = { method, headers: {} };

		if (!isPublic && !disableAuth) {
			const user = getSetting('user');
			if (!user) throw new AuthError('user auth token not found!');
			options.headers.Authorization = `Bearer ${user.token}`;
		}

		if (body && !(body instanceof FormData)) {
			options.body = JSON.stringify(body);
			options.headers['Content-Type'] = 'application/json';
		} else {
			options.body = body;
		}

		const response = await fetch(apiPath, options);
		if (response.status === 401) throw new AuthError('login expired!');

		const result = responseSchema.safeParse(await response.json());
		if (!result.success) throw new ApiError('invalid api response format!');
		const { errorCode, errorDescription, data } = result.data;
		if (errorCode !== '0') throw new ApiError(errorDescription);
		return data as Response;
	} catch (error) {
		if (error instanceof AuthError) logout();
		if (error instanceof ApiError) throw error;
		throw new ApiError(`fetch error: ${getCatchMessage(error)}`, {
			cause: error,
		});
	}
};

/**
 * the helper to send a `GET` request to the backend
 * @param apiPath the path of the api request
 * @param options the options to send with the request
 * @param options.schema the zod schema to parse the response with
 * @param options.isPublic is the request to a public endpoint? auth header will be excluded if `true`
 * @param options.shouldSort should the response should be sorted?
 */
export const getRequest = async <Schema extends z.ZodSchema = z.ZodUnknown>(
	apiPath: string,
	options?: {
		schema?: Schema;
		isPublic?: boolean;
		shouldSort?: z.infer<Schema> extends z.infer<typeof timestampSchema>[]
			? boolean
			: undefined;
	},
): Promise<z.infer<Schema>> => {
	const response = apiRequest(apiPath, 'GET', undefined, options?.isPublic);
	if (!options?.schema) return response;
	return response.then(async (data) => {
		const parsed = (
			options.schema ? options.schema.parse(data) : data
		) as Promise<z.infer<Schema>>;
		return options.shouldSort && Array.isArray(parsed)
			? parsed.sort(dbDataSorter as never)
			: parsed;
	});
};

/**
 * the helper to send a `PATCH` request to the backend
 * @param apiPath the path of the api request
 * @param body the body of the request
 * @param isPublic is the request to a public endpoint? auth header will be excluded if true
 */
export const patchRequest = async <Response = unknown>(
	apiPath: string,
	body: Obj | FormData,
	isPublic?: boolean,
) => apiRequest<Response>(apiPath, 'PATCH', body, isPublic);

/**
 * the helper to send a `PUT` request to the backend
 * @param apiPath the path of the api request
 * @param body the body of the request
 * @param isPublic is the request to a public endpoint? auth header will be excluded if true
 */
export const putRequest = async <Response = unknown>(
	apiPath: string,
	body: Obj | FormData,
	isPublic?: boolean,
) => apiRequest<Response>(apiPath, 'PUT', body, isPublic);

/**
 * the helper to send a `POST` request to the backend
 * @param apiPath the path of the api request
 * @param body the body of the request
 * @param isPublic is the request to a public endpoint? auth header will be excluded if true
 */
export const postRequest = async <Response = unknown>(
	apiPath: string,
	body: Obj | Obj[] | FormData,
	isPublic?: boolean,
) => apiRequest<Response>(apiPath, 'POST', body, isPublic);

export type BulkResponse<Type extends Obj = Obj> = {
	successful: Type[];
	failed: Utils.prettify<Type & { error: string }>[];
};

/**
 * the helper to send many `POST` requests to the same endpoint
 * @param apiPath the path of the api request
 * @param requests the array of requests to send to the endpoint
 * @param isPublic is the request to a public endpoint? auth header will be excluded if true
 */
export const bulkPostRequest = async <Type extends Obj>(
	apiPath: string,
	requests: Type[],
	isPublic?: boolean,
) => {
	const response: BulkResponse<Type> = {
		successful: [],
		failed: [],
	};
	await Promise.all(
		requests.map(async (row) => {
			await postRequest(apiPath, row, isPublic)
				.then(() => response.successful.push(row))
				.catch((error) =>
					response.failed.push({
						...row,
						error: getCatchMessage(error),
					}),
				);
		}),
	);
	return response;
};

/**
 * the helper to send a `DELETE` request to the backend
 * @param apiPath the path of the api request
 * @param isPublic is the request to a public endpoint? auth header will be excluded if true
 */
export const deleteRequest = async <Response = unknown>(
	apiPath: string,
	isPublic?: boolean,
) => apiRequest<Response>(apiPath, 'DELETE', undefined, isPublic);
