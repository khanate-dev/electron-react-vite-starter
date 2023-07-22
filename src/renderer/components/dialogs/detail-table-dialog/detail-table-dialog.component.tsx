import { GeneralDialog } from '@renderer/components/dialogs/general-dialog';
import { ViewTable } from '@renderer/components/tables/view-table';

import type { GeneralDialogProps } from '@renderer/components/dialogs/general-dialog';
import type { ViewTableProps } from '@renderer/components/tables/view-table';
import type { ViewSchemaField } from '@renderer/schemas';
import type { AnyZodObject } from 'zod';

export type DetailTableDialogProps<
	Zod extends AnyZodObject,
	Fields extends {
		[K in keyof Zod['shape']]?: ViewSchemaField<Zod['shape'][K]>;
	},
	PK extends keyof Zod['shape'],
	ID extends keyof Zod['shape'],
> = {
	/** should the table columns be fixed width or auto? */
	isTableAutoLayout?: boolean;
} & Pick<
	GeneralDialogProps,
	| 'onClose'
	| 'title'
	| 'actions'
	| 'hasCloseAction'
	| 'maxWidth'
	| 'disableActions'
> &
	Pick<ViewTableProps<Zod, Fields, PK, ID>, 'schema' | 'data'>;

export const DetailTableDialog = <
	Zod extends AnyZodObject,
	Fields extends {
		[K in keyof Zod['shape']]?: ViewSchemaField<Zod['shape'][K]>;
	},
	PK extends keyof Zod['shape'],
	ID extends keyof Zod['shape'],
>({
	schema,
	data,
	isTableAutoLayout,
	...dialogProps
}: DetailTableDialogProps<Zod, Fields, PK, ID>) => {
	return (
		<GeneralDialog
			{...dialogProps}
			sx={{ height: '90vh' }}
			maxWidth={dialogProps.maxWidth ?? 'lg'}
		>
			<ViewTable
				schema={schema}
				data={data}
				styles={{
					container: {
						width: '100%',
					},
					table: {
						tableLayout: isTableAutoLayout ? 'auto' : 'fixed',
					},
				}}
				hasPagination
			/>
		</GeneralDialog>
	);
};
