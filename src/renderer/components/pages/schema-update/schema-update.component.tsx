import { PageContainer } from '@renderer/components/containers/page-container';
import { SchemaForm } from '@renderer/components/forms/schema-form';
import { useNavigate, useParams } from 'react-router-dom';
import { getParamId } from '@shared/helpers/route';

import type { UpdateSchemaFormProps } from '@renderer/components/forms/schema-form';
import type {
	BaseSelectionType,
	FormFieldZodType,
	FormSchemaField,
} from '@renderer/schemas';
import type { App } from '@renderer/types/app';
import type { z } from 'zod';


export type SchemaUpdateProps<
	Zod extends z.ZodObject<Record<string, FormFieldZodType>, 'strict'>,
	Keys extends keyof Zod['shape'],
	WorkingObj extends {
		[K in Keys]: Zod['shape'][K] extends
			| BaseSelectionType
			| z.ZodNullable<BaseSelectionType>
			? z.infer<Zod['shape'][K]> | null
			: Zod['shape'][K] extends z.ZodNumber | z.ZodNullable<z.ZodNumber>
			? string
			: z.infer<Zod['shape'][K]>;
	},
	Fields extends {
		[K in Keys]: FormSchemaField<Zod['shape'][K], WorkingObj>;
	},
> = {
	/** the endpoint functions to use */
	endpoint: (id: App.dbId, body: FormData) => Promise<unknown>;
} & Pick<
	UpdateSchemaFormProps<Zod, Keys, WorkingObj, Fields>,
	| 'schema'
	| 'sx'
	| 'formId'
	| 'lists'
	| 'defaultValues'
	| 'actions'
	| 'picture'
	| 'isBusy'
	| 'disabled'
>;

export const SchemaUpdate = <
	Zod extends z.ZodObject<Record<string, FormFieldZodType>, 'strict'>,
	Keys extends keyof Zod['shape'],
	WorkingObj extends {
		[K in Keys]: Zod['shape'][K] extends
			| BaseSelectionType
			| z.ZodNullable<BaseSelectionType>
			? z.infer<Zod['shape'][K]> | null
			: Zod['shape'][K] extends z.ZodNumber | z.ZodNullable<z.ZodNumber>
			? string
			: z.infer<Zod['shape'][K]>;
	},
	Fields extends {
		[K in Keys]: FormSchemaField<Zod['shape'][K], WorkingObj>;
	},
>(
	props: SchemaUpdateProps<Zod, Keys, WorkingObj, Fields>,
) => {
	const params = useParams();
	const navigate = useNavigate();

	return (
		<PageContainer
			title={`Update ${props.schema.label}`}
			navigation={['back']}
		>
			<SchemaForm
				{...props}
				isUpdate
				onCancel={() => {
					navigate(-1);
				}}
				onSubmit={async (data) => {
					await props.endpoint(getParamId(params), data);
					navigate(-1);
				}}
			/>
		</PageContainer>
	);
};
