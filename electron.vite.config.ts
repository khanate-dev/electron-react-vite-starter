/* eslint-disable import/no-default-export */
import { resolve } from 'path';

import {
	bytecodePlugin,
	defineConfig,
	externalizeDepsPlugin,
} from 'electron-vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	main: {
		plugins: [externalizeDepsPlugin(), bytecodePlugin()],
	},
	preload: {
		plugins: [externalizeDepsPlugin()],
	},
	renderer: {
		resolve: {
			alias: {
				'@renderer': resolve('src/renderer'),
			},
		},
		plugins: [react()],
	},
});
