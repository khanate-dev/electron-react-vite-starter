import { Drawer, IconButton, List } from '@mui/material';
import { useState } from 'react';

import { CustomButton } from '@renderer/components/controls/custom-button';
import { AppLogo } from '@renderer/components/media/app-logo';
import { ToggleSidebarIcon } from '@renderer/components/media/icons';
import { AppLink } from '@renderer/components/navigation/app-link';
import { logout, useUser } from '@renderer/contexts/auth';
import { dashboardRoutes } from '@renderer/routes/dashboard';

import { SidebarItem } from './sidebar-item';
import { sidebarStyles as styles } from './sidebar.styles';

import type { UserType } from '@renderer/schemas/user';
import type { Mui } from '@renderer/types/mui';
import type { MouseEventHandler } from 'react';

export type TSidebarItem = {
	/** the identifier string */
	name: string;

	/** the styles to apply on the item */
	sx?: Mui.sxProp;

	/** the label to show on the list item */
	label?: string;

	/** if excluded, the item is used for page navigation */
	onClick?: MouseEventHandler<HTMLDivElement>;

	/** the user types that can access this page. available to everyone if excluded */
	availableTo?: UserType[];
};

const pages = dashboardRoutes.map(
	(route): TSidebarItem => ({
		name: route.path,
		label: route.label,
		availableTo: route.availableTo,
	}),
);

export const Sidebar = () => {
	const { userType } = useUser();

	const [isMinimized, setIsMinimized] = useState<boolean>(false);

	const appControls: TSidebarItem[] = [
		{
			name: 'logout',
			label: 'Logout',
			sx: styles.logoutItem,
			onClick: logout,
		},
	];

	const navigationList: TSidebarItem[] = [...pages, ...appControls];

	const availableNavigation = navigationList.filter(
		(page) => !page.availableTo || page.availableTo.includes(userType),
	);

	return (
		<Drawer
			variant='permanent'
			sx={[styles.drawer, isMinimized && styles.drawerMinimized]}
		>
			<AppLink to=''>
				<CustomButton
					sx={styles.drawerHeader}
					icon={<AppLogo isIcon={isMinimized} />}
					label='Home'
					noTooltip={!isMinimized}
					tooltipProps={{
						placement: 'right',
					}}
					isIcon
				/>
			</AppLink>

			<IconButton
				sx={styles.toggle}
				data-rotate={isMinimized}
				onClick={() => {
					setIsMinimized((prev) => !prev);
				}}
			>
				<ToggleSidebarIcon />
			</IconButton>

			<List sx={styles.navList}>
				<div className='scroll-y'>
					{availableNavigation.map((item) => (
						<SidebarItem
							key={item.name}
							listItem={item}
							isMinimized={isMinimized}
						/>
					))}
				</div>
			</List>
		</Drawer>
	);
};
