import type { FieldAction } from '@renderer/components/app/field-actions';
import type {
	GeneralTableAction,
	GeneralTableProps,
	GeneralTableStyles,
} from '@renderer/components/tables/general-table';
import type { BulkResponse } from '@renderer/helpers/api';
import type { Sorting } from '@renderer/hooks/sorting';
import type { StatusAction } from '@renderer/hooks/status';
import type {
	BaseSelectionType,
	FormFieldZodType,
	FormSchema,
	FormSchemaField,
	FormSchemaLists,
} from '@renderer/schemas';
import type { App } from '@renderer/types/app';
import type { Mui } from '@renderer/types/mui';
import type { Utils } from '@shared/types/utils';
import type { z } from 'zod';

export type FormTableFormStyles = Partial<
	Record<
		| 'form'
		| 'formField'
		| 'formDropdown'
		| 'formCheckbox'
		| 'formReadonly'
		| 'formTextField',
		Mui.sxProp
	>
>;

export type FormTableStyles = GeneralTableStyles & FormTableFormStyles;

export type FormTableProps<
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
	Type extends App.withLocalId<WorkingObj>,
> = Pick<
	GeneralTableProps<Type>,
	| 'data'
	| 'controls'
	| 'emptyLabel'
	| 'footer'
	| 'isBusy'
	| 'hasPagination'
	| 'disableSorting'
> & {
	/** the schema to use */
	schema: FormSchema<Zod, Keys, WorkingObj, Fields>;

	/** the id to apply to the form */
	formId?: string;

	/** the function to call when the table changes */
	onChange: (
		data: Type[],
		details:
			| { reason: 'delete-all'; affected: Type[] }
			| { reason: 'add' | 'delete'; affected: Type }
			| { reason: 'update'; affected: Type; key: keyof Type },
	) => void;

	/**
	 * the function to call when the form is submitted
	 * @param parsedData the data parsed with the passed schema
	 * @returns
	 * - `BulkResponse` in a promise to show a detailed response
	 * - `StatusAction` to set the form status to the returned state
	 * - `string` the form status is set to ephemeral `success` with the given string as the message
	 * - `void` the form status is set to idle
	 */
	onSubmit: (
		parsedData: App.withLocalId<z.infer<Zod>>[],
	) => Promise<
		void | string | StatusAction | BulkResponse<App.withLocalId<z.infer<Zod>>>
	>;

	/** the styles to apply to table components. @default {} */
	styles?: FormTableStyles;

	/** the form controls to enable */
	actions?: {
		/** should the actions be disabled? */
		disabled?: boolean;

		/** should the actions use a full button instead of icon buttons? */
		fullButtons?: boolean;

		/** should the add action be shown. pass an object to override defaults */
		add?: boolean | Pick<GeneralTableAction<Type>, 'label' | 'disabled'>;

		/** should the submit action be shown. pass an object to override defaults */
		submit?: boolean | Pick<GeneralTableAction<Type>, 'label' | 'disabled'>;

		/** should the delete action be shown. pass an object to override defaults */
		delete?: boolean | Pick<GeneralTableAction<Type>, 'disabled'>;

		/** should the duplicate action be shown. pass an object to override defaults */
		duplicate?: boolean | Pick<GeneralTableAction<Type>, 'disabled'>;

		/** any additional actions to show */
		custom?: GeneralTableAction<Type>[];

		/** actions to show against schema fields */
		field?: { [K in Keys]?: FieldAction[] };
	};

	/** the default sorting for the table */
	defaultSorting?: Sorting<
		Utils.filteredKeys<Fields, { type: 'readonly' } | { isSortable: true }>
	>;
} & FormSchemaLists<Zod, Keys, WorkingObj, Fields>;
