import { CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DarkModeProvider, useDarkMode } from '@renderer/contexts/dark-mode';
import { getMuiTheme } from '@renderer/theme';
import locale from 'dayjs/locale/en';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';

import type { RouterProviderProps } from 'react-router-dom';

export type ProvidersProps = RouterProviderProps;

const ThirdPartyProviders = (props: ProvidersProps) => {
	const isDarkMode = useDarkMode();

	return (
		<ThemeProvider theme={getMuiTheme(isDarkMode ? 'dark' : 'light')}>
			<CssBaseline />
			<Toaster
				gutter={10}
				toastOptions={{
					style: {
						backgroundColor: isDarkMode ? '#333' : '#efefef',
						color: isDarkMode ? '#fff' : '#111',
						textTransform: 'capitalize',
					},
				}}
			/>
			<LocalizationProvider
				dateAdapter={AdapterDayjs}
				adapterLocale={locale.name}
			>
				<RouterProvider {...props} />
			</LocalizationProvider>
		</ThemeProvider>
	);
};

export const Providers = (props: ProvidersProps) => (
	<DarkModeProvider>
		<ThirdPartyProviders {...props} />
	</DarkModeProvider>
);
