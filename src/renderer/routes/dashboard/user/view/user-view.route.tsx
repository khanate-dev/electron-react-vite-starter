import { useLoaderData } from 'react-router-dom';

import { SchemaView } from '@renderer/components/pages/schema-view';
import { deleteUser, getUsers } from '@renderer/endpoints/user';
import { userViewSchema as schema } from '@renderer/schemas/user';

const loader = getUsers;

export const UserView = () => {
	const data = useLoaderData<typeof loader>();
	return (
		<SchemaView
			schema={schema}
			navigation={['add']}
			data={data}
			deleteEndpoint={deleteUser}
			hasUpdate
		/>
	);
};

UserView.loader = loader;
