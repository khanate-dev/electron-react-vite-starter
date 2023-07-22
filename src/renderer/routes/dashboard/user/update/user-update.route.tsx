import { SchemaUpdate } from '@renderer/components/pages/schema-update';
import { getUserById, updateUser } from '@renderer/endpoints/user';
import {
	userFormSchema as schema,
	userTypeDropdownOptions,
} from '@renderer/schemas/user';
import { useLoaderData } from 'react-router-dom';
import { getParamId } from '@shared/helpers/route';

import type { LoaderFunction } from 'react-router-dom';


const loader = (async ({ params }) => {
	return getUserById(getParamId(params));
}) satisfies LoaderFunction;

export const UserUpdate = () => {
	const user = useLoaderData<typeof loader>();
	return (
		<SchemaUpdate
			schema={schema}
			endpoint={updateUser}
			lists={{ userType: userTypeDropdownOptions }}
			defaultValues={{ ...user, password: '', confirmPassword: '' }}
		/>
	);
};

UserUpdate.loader = loader;
