import {
	ArrowLeft,
	ArrowRight,
	Add as MaximizeIcon,
	Remove as MinimizeIcon,
} from '@mui/icons-material';
import {
	Box,
	IconButton,
	List,
	ListItemButton,
	Pagination as MuiPagination,
	Stack,
	Typography,
} from '@mui/material';
import { Dropzone } from '@renderer/components/controls/dropzone';
import { SearchBar } from '@renderer/components/controls/search-bar';
import { csx } from '@renderer/helpers/style';
import { usePagination } from '@renderer/hooks/pagination';
import { useState } from 'react';
import { humanizeToken } from '@shared/helpers/string';

import { getOptionPanelStyles } from './option-panel.styles';

import type { Mui } from '@renderer/types/mui';
import type { ReactNode } from 'react';


export type OptionPanelProps<Type extends Obj> = Mui.propsWithSx<{
	/** the list of items to show */
	list: Type[];

	/** the list of schema field names to show on option */
	labelBy: (keyof Type)[] | { key: keyof Type; label: string }[];

	/** the function to call when a panel item is picked */
	onPick: (item: Type) => void;

	children: ReactNode;
}>;

export const OptionPanel = <Type extends Obj>({
	sx,
	labelBy,
	list,
	onPick,
	children,
}: OptionPanelProps<Type>) => {
	const [search, setSearch] = useState('');
	const [isMinimized, setIsMinimized] = useState(false);
	const [hideControls, setHideControls] = useState(false);

	const styles = getOptionPanelStyles(isMinimized);

	const keys = labelBy.map((row) => {
		if (typeof row === 'object') return row;
		return { key: row, label: humanizeToken(String(row)) };
	});

	const filteredList = search
		? list.filter((row) =>
				keys.some(({ key }) =>
					String(row[key]).toLowerCase().includes(search.toLowerCase()),
				),
		  )
		: list;

	const {
		currentPage,
		setCurrentPage,
		totalPages,
		paginatedData: paginatedList,
	} = usePagination(filteredList);

	return (
		<Stack
			sx={styles.container}
			direction='row'
		>
			<Stack sx={csx(styles.panel, sx, isMinimized && styles.minimized)}>
				<IconButton
					sx={[styles.button, styles.minimizeButton]}
					color='primary'
					size='large'
					onClick={() => {
						setIsMinimized((prev) => !prev);
					}}
				>
					{isMinimized ? (
						<ArrowRight fontSize='inherit' />
					) : (
						<ArrowLeft fontSize='inherit' />
					)}
				</IconButton>

				<Stack
					sx={csx(
						styles.controls,
						totalPages === 1 && styles.noPagination,
						hideControls && styles.controlsHidden,
					)}
				>
					<SearchBar
						sx={styles.searchField}
						onChange={setSearch}
					/>

					{totalPages > 1 && (
						<MuiPagination
							sx={styles.pagination}
							count={totalPages}
							siblingCount={1}
							page={currentPage}
							variant='outlined'
							color='primary'
							shape='rounded'
							size='small'
							hideNextButton
							hidePrevButton
							onChange={(_event, page) => {
								setCurrentPage(page);
							}}
						/>
					)}
				</Stack>

				<IconButton
					sx={[styles.button, styles.controlsMinimize]}
					disableRipple
					onClick={() => {
						setHideControls((prev) => !prev);
					}}
				>
					{hideControls ? <MaximizeIcon /> : <MinimizeIcon />}
				</IconButton>

				<Stack
					className='scroll-y'
					sx={styles.options}
					component={List}
				>
					{paginatedList.map((row, index) => {
						const content = keys.map(({ key, label }) => (
							<Box
								key={String(key)}
								sx={styles.labelRow}
							>
								<Typography sx={styles.labelTitle}>{label}</Typography>
								<Typography sx={styles.labelValue}>
									{String(row[key])}
								</Typography>
							</Box>
						));

						return (
							<ListItemButton
								key={index}
								sx={styles.optionItem}
								draggable={true}
								onClick={() => {
									onPick(row);
								}}
								onDragStart={(event) => {
									event.dataTransfer.setData(
										'index',
										String(list.indexOf(row)),
									);
								}}
							>
								{content}
							</ListItemButton>
						);
					})}
				</Stack>
			</Stack>

			<Dropzone
				sx={styles.main}
				onDrop={(dataTransfer) => {
					const index = parseInt(dataTransfer.getData('index'));
					const operation = list[index];
					if (!operation) return;

					onPick(operation);
				}}
			>
				{children}
			</Dropzone>
		</Stack>
	);
};
