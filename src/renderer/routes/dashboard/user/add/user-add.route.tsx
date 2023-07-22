import { SchemaAdd } from '@renderer/components/pages/schema-add';
import { addUser } from '@renderer/endpoints/user';
import {
	userFormSchema as schema,
	userTypeDropdownOptions,
} from '@renderer/schemas/user';

export const UserAdd = () => {
	return (
		<SchemaAdd
			schema={schema}
			endpoint={addUser}
			lists={{ userType: userTypeDropdownOptions }}
		/>
	);
};
