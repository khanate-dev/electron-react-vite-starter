import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { CustomTooltip } from '@renderer/components/feedback/custom-tooltip';
import { AppIcon } from '@renderer/components/media/app-icon';
import { AppLink } from '@renderer/components/navigation/app-link';
import { csx } from '@renderer/helpers/style';
import { useState } from 'react';
import { formatToken, humanizeToken } from '@shared/helpers/string';

import { sidebarItemStyles as styles } from './sidebar-item.styles';

import type { TSidebarItem } from '@renderer/components/panels/sidebar';


export type SidebarItemProps = {
	/** the current list item */
	listItem: TSidebarItem;

	/** is the sidebar minimized? */
	isMinimized: boolean;
};

export const SidebarItem = ({ listItem, isMinimized }: SidebarItemProps) => {
	const [isTooltip, setIsTooltip] = useState<boolean>(false);

	const path = !listItem.onClick
		? formatToken(listItem.name, 'kebab')
		: undefined;

	const item = (
		<ListItemButton
			sx={csx(styles.listItem, listItem.sx)}
			onClick={listItem.onClick}
		>
			<ListItemIcon sx={styles.listIcon}>
				<AppIcon name={listItem.name as never} />
			</ListItemIcon>

			<ListItemText
				sx={styles.listName}
				primary={listItem.label ?? humanizeToken(listItem.name)}
			/>
		</ListItemButton>
	);

	return (
		<CustomTooltip
			sx={styles.tooltip}
			title={listItem.label ?? humanizeToken(listItem.name)}
			placement='right'
			disableHoverListener={!isMinimized}
			disableFocusListener={!isMinimized}
			disableTouchListener={!isMinimized}
			open={isMinimized && isTooltip}
			onOpen={() => {
				setIsTooltip(true);
			}}
			onClose={() => {
				setIsTooltip(false);
			}}
		>
			{path ? (
				<AppLink
					to={path}
					label={item}
				/>
			) : (
				item
			)}
		</CustomTooltip>
	);
};
