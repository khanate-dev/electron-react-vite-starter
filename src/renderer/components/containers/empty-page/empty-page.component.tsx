import { Box } from '@mui/material';
import { BackgroundImage } from '@renderer/components/media/background-image';
import { csx } from '@renderer/helpers/style';

import { emptyPageStyles as styles } from './empty-page.styles';

import type { Mui } from '@renderer/types/mui';
import type { ReactNode } from 'react';

export type EmptyPageProps = {
	/** the styles to apply to the center box */
	boxSx?: Mui.sxProp;

	/** the opacity of the background image */
	backgroundOpacity?: number;

	/** the contents of the center box */
	children: ReactNode;
};

export const EmptyPage = ({
	boxSx,
	backgroundOpacity,
	children,
}: EmptyPageProps) => {
	return (
		<Box sx={styles.container}>
			<BackgroundImage
				opacity={backgroundOpacity ?? 0.5}
				sx={styles.image}
			/>

			<Box sx={csx(styles.box, boxSx)}>{children}</Box>
		</Box>
	);
};
