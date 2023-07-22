import { AppBar, Box, Stack, Toolbar } from '@mui/material';
import { Outlet, redirect, useLoaderData } from 'react-router-dom';

import { UserProfile } from '@renderer/components/app/user-profile';
import { ThemeSwitch } from '@renderer/components/controls/theme-switch';
import { WiMetrixLogo } from '@renderer/components/media/wimetrix-logo';
import { Breadcrumbs } from '@renderer/components/navigation/breadcrumbs';
import { Sidebar } from '@renderer/components/panels/sidebar';
import { AuthProvider } from '@renderer/contexts/auth';
import { getSetting } from '@renderer/helpers/settings';

import { homeStyles as styles } from './dashboard.styles';

import type { LoggedInUser } from '@renderer/schemas/user';

const loader = () => {
	const user = getSetting('user');
	if (!user) return redirect('/login');
	return user;
};

export const Dashboard = () => {
	const user = useLoaderData() as LoggedInUser;
	return (
		<AuthProvider user={user}>
			<Sidebar />

			<Box sx={styles.container}>
				<AppBar
					position='relative'
					sx={styles.header}
					elevation={0}
				>
					<Stack
						direction='row'
						sx={styles.toolbar}
						component={Toolbar}
						disableGutters
					>
						<Breadcrumbs />

						<WiMetrixLogo sx={styles.logo} />

						<ThemeSwitch />

						<UserProfile />
					</Stack>
				</AppBar>

				<Box
					className='scroll-y'
					sx={styles.main}
					component='main'
				>
					<Outlet />
				</Box>
			</Box>
		</AuthProvider>
	);
};

Dashboard.loader = loader;
