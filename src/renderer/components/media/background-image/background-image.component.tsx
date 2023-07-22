import { Box } from '@mui/material';

import { csx } from '@renderer/helpers/style';

import { getBackgroundImageStyles } from './background-image.styles';

import type { Mui } from '@renderer/types/mui';

export type BackgroundImageProps = Mui.propsWithSx<{
	/** the opacity to set on the SVG element */
	opacity?: number;
}>;

export const BackgroundImage = ({ sx, opacity }: BackgroundImageProps) => {
	const styles = getBackgroundImageStyles(opacity);

	return (
		<Box
			component='svg'
			sx={csx(styles.svg, sx)}
			viewBox='0 0 6393.24 3246.15'
			fillRule='evenodd'
		>
			<Box
				component='path'
				sx={styles.background}
				d='M375.13 3246.14h5898.9c280.06-1256.01 56.76-1856.77-566.24-1832.03-346.12 13.74-401.94-155.15-250.87-407.71C5838.9 367.81 3739.86-509.66 2782.95 373.46c-187.23 172.8-576.86 88.64-825.26 49.74-631.41-98.86-942.75 129.1-898.87 568.73 68.35 684.85-1532.33 412.25-683.69 2254.2z'
			/>
			<Box
				component='path'
				sx={styles.foreground}
				d='M1526.51 3246.14h3070.74c77.07 0 140.13-63.06 140.13-140.12V1178.26c0-100.29-82.06-182.35-182.36-182.35H1735.76c-91.75 0-166.58 74.83-166.58 166.58v879.15c0 73.39 59.86 133.26 133.26 133.26h569.78c189.38 0 24.99-441.8 444.61-441.8h691.78c74.58 0 133.96 59.94 133.26 134.52-1.62 172.15-5.75 337.71-7.36 507.75-.69 72.95-60.3 131.99-133.25 131.99H1519.65c-73.4 0-133.26 59.86-133.26 133.26v465.4c0 77.07 63.05 140.12 140.13 140.12z'
			/>
			<Box
				component='path'
				sx={styles.secondaryRegular}
				d='M564.9 2206.19c-104.39 138.86 259.23 143.58 267.1 94.43 9.16-57.18 18.57-141.4 44.22-194.11 21.88-44.96 32.79-92.35 25.81-117.88 9.29-5.1 19.26-7.72 29.91-7.87-.2-.73-.41-1.45-.63-2.17-.39-1.23-.79-2.46-1.18-3.7-11.43-33.91-36.89-57.94-76.37-72.08 6.27 23.53 10.35 49.26 11.51 67.61 1.43 22.46-37.93 14.89-118.32-22.08-13.57-6.24-19.3-37.07-18.09-81.45-86.47-12.97-116.37 29.45-95.52 128.52 18.52 88-18.76 144.68-68.46 210.78zm2064.33-79.61c-8.26 19.3-21.76 34.95-40.49 46.96.92.19 1.53 1.16 1.83 2.89 4.34 6.64 8.06 12.64 11.14 18.01 19.55-17.21 28.73-39.83 27.53-67.86zm820.51-1695.77c24.03-1.85 44.72-14.56 62.08-38.14-10.57 8.79-33.77 14.15-61.14 15.52.36 7.89.05 15.43-.94 22.62zm2271.99 1298.35c-23.22 15.39-45.74 23.32-67.56 23.8-.03 9.7.07 18.57.3 26.63 35.73-10.68 58.15-27.49 67.26-50.43zm-1865.07-22.57c-23.53 3.64-45.14 2.27-64.83-4.12 21.53 15.97 45.09 27.4 70.66 34.29-1.27-9.06-3.21-19.12-5.82-30.17zm-3059.64 95.18c7.88 32.57 25.02 53.09 51.42 61.57 1.77-7.08 4.04-14.89 6.83-23.43-26.29-8.65-45.7-21.36-58.25-38.14zm1386.62 818.75c8.74 0 15.83 7.09 15.83 15.83s-7.09 15.83-15.83 15.83-15.83-7.09-15.83-15.83 7.09-15.83 15.83-15.83zm3714.84-278.82c-60.41 48.37-134.15 73.29-221.23 74.76-18.24.31-37.07-.41-56.49-2.16 13.91 170.96 33.01 423.29 57.31 756.98 21.33 18.64 53.51 19.34 78.28 15.11 43.36-166.15 65.78-310.27 67.3-432.37 49.19 106.98 120.36 237.65 208.76 384.3 1.64-.54 3.25-1.08 4.83-1.63 29.28-10.15 48.26-22.32 56.96-36.49-34.1-244.83-74.59-382.06-104.04-425.42-65.54-96.48-90.13-211.29-91.67-333.09zm-526.18-446.19c-3.95-1.1-7.98-2.12-12.08-3.07-5.24 47.33-17.71 92.64-29.91 142.25-5.73 23.29-.86 51.25 3.79 77.94 22.02-62.85 28.43-158.12 38.2-217.11zm-262.3-120.5c-3.86 53.89-7.79 108.67-11.78 164.34 30.09 107.55 33.08 183.32 2.63 229.97-13.86 21.24-25.65 43.59-35.4 67.03 27.73 26.34 49.28 46.11 66.27 56.77 5.97-126.36 41.84-200.28 94.14-228.04 44.47-23.61 75.67-85.62 97.45-179.55-86.43-13.45-182.61-16.37-184.57-120.23-9.29 2.94-18.79 6.54-28.73 9.72zM4211.46 475.9l189.65-.38c15.72-.03 27.56 12.8 28.57 28.33l25.82 395.43c1.02 15.54-12.87 28.49-28.58 28.33l-237.33-2.33c-15.7-.15-29.44-12.77-28.57-28.33l14.61-262.45 7.25-130.27c.87-15.56 12.86-28.3 28.57-28.33zm-1226.44 702.08c88.76-74.53 149.98-131.12 180.09-171.22 16.71 44.94 43.65 117.44 77.27 207.95 3.1.26 6.17.36 9.21.3 14.49-.29 28.32-4.24 41.49-11.84 2.77-1.6 5.51-3.36 8.22-5.28-8.85-86.47-22.13-204.38-55.83-285.38l-.21-.11c130.76 68.97 161.78 48.7 296.69 56.32 89.8 5.06 60.03-115.02 34.73-209.4-19.98 15.86-72.95 19.12-162.27 12.68-10.57-.76-19.07-4.45-25.5-11.32-5.14 8.48-9.19 15.14-12.13 19.99-125.91-37.94-203.76-28.11-231.8 19.29-70.9 119.89-153.46 238.77-213.64 363.99 1.13 1.4 2.46 2.7 3.96 3.89 8.41 6.65 22.59 10.05 42.56 10.22 2.31.02 4.7 0 7.17-.07zm708.95 1175.91c75.06 10.58 219.09-13.06 253.54-47.07 5.39-5.32 8.09-10.88 7.44-16.62-13.39-117.77-11.35-211.82-18.35-280.23 60.35 54.33 182.94 92.05 253.53 97.11 30.52 2.19 45.26 2.39 52.39-5.11 2.23-2.34 3.71-5.44 4.69-9.46 1.51-6.14 2.51-11.52 1.58-16.62-2.25-12.38-15.89-23.09-61.31-39.03-58.97-20.69-143.47-65.6-224.77-149a709.403 709.403 0 01-41.14-46.06c-8-9.77-17.1-17-20.19-29.9-.27-1.13-.5-2.3-.67-3.52-2.73-19.18-49.88-36.68-141.36-52.5l-1.05-.18c-88.55 39.96-72.18 251.55-114.97 517.25-3.36 20.87-4.18 39.72 1.71 53.78 2.09 4.98 5.02 9.36 8.97 13.02 7.53 6.96 21.7 11.56 39.96 14.13zm-779.67 494.54c27.64-34.07 62.43-96.82 104.11-188.42 50.7 149.93 91.77 234.77 112.06 263.55 36.06 51.13 67.65 141.45 106.81 263.12 21.98 1.72 28.89-6.48 42.4-14.55 6.94-126.46-12.12-225.62-64.47-291.92-5.29-6.71-7.7-17.69-9.04-39.96-9.93-165.5-15.76-272.77-28.98-343.31-11.32-60.4-28.06-93.86-57.44-113.89-43.96 75.08-167.34 102.2-237.27 105.3-15.53 2.65-71.93 253.62-80.83 284.55-37.42 129.97-5.14 194.9-71.28 409.63 12.95 1.74 44.84.1 54.25-9.61 57.9-65.45 90.22-146.49 93.5-243.25.81-23.85 11.63-51.01 36.16-81.25zM968.37 2263.49c103.6-25.43 201.5-84.65 259.44-12.93 247.89 306.86 471.9 359.03 601.86 246.37h326.86c-14.07 28.55-28.8 55.49-44.17 80.86-143.74-30.64-233.68-20.39-269.8 30.74 141.56 30.35 217.49 46.19 217.49 46.19l.03-.04c-137.51 179.49-318.87 252.24-544.06 218.41-408.6-61.39-459.77-571.98-547.65-609.6z'
			/>
			<Box
				component='path'
				sx={styles.primaryDarker}
				d='M3877.18 3176.6s-24.09.81-72.28 2.42c2.7 35.1 7.33 57.48 13.89 67.13h162.98c-6.78-34.54-74.05-19.92-104.59-69.55zM2687.45 1091.54c25.55 0 46.26 20.71 46.26 46.26 0 25.56-20.71 46.27-46.26 46.27-25.56 0-46.27-20.71-46.27-46.27 0-25.55 20.71-46.26 46.27-46.26zm-354.31 0c25.55 0 46.26 20.71 46.26 46.26 0 25.56-20.71 46.27-46.26 46.27-25.56 0-46.27-20.71-46.27-46.27 0-25.55 20.71-46.26 46.27-46.26zm177.15 0c25.55 0 46.26 20.71 46.26 46.26 0 25.56-20.71 46.27-46.26 46.27-25.56 0-46.27-20.71-46.27-46.27 0-25.55 20.71-46.26 46.27-46.26zm-524.84 1202.79h-11.1c-9.17 0-16.66 7.48-16.66 16.66v18.81c0 9.17 7.48 16.66 16.66 16.66h11.1c9.17 0 16.66 7.48 16.66 16.66v11.08c0 9.17 7.48 16.66 16.66 16.66h15.94l13.49 97.17 6.03-97.17h6.72l6.31 96.73 11.47-96.73c5.05 0 12.73.83 12.73-6.66v-106.6c0-9.17 7.48-16.66 16.66-16.66h47.82c0-.09 15.19 17.78 36.44 17.78 24.44 0 44.24-19.81 44.24-44.24 0-24.44-19.81-44.24-44.24-44.24-21.19 0-36.44 17.8-36.44 17.79h-47.82c-9.17 0-16.66-7.48-16.66-16.66v-33.5c0-9.17-7.48-16.66-16.66-16.66h-56.04c-9.17 0-16.66 7.48-16.66 16.66v119.82c0 9.17-7.48 16.66-16.66 16.66zm212.54-1377.97v-68.39c0-3.67-2.99-6.66-6.66-6.66h-6.56c-3.67 0-6.66 2.99-6.66 6.66v68.39c0 3.67-2.99 6.66-6.66 6.66h-41.59c-3.67 0-6.66 2.99-6.66 6.66v59.56c0 3.67 2.99 6.66 6.66 6.66h116.38c3.67 0 6.66-2.99 6.66-6.66v-59.56c0-3.67-2.99-6.66-6.66-6.66h-41.59c-3.67 0-6.66-2.99-6.66-6.66zm-190.66 42.35h31.89c9.18 0 16.66 8.14 16.66 18.12v363.97c0 15.32-17.25 24.69-28.29 12.97l-31.89-33.87c-3.33-3.55-5.02-7.9-5.02-12.97v-330.1c0-9.98 7.48-18.12 16.66-18.12zm1792.15 735.08c29.71-3.35 36.85-14.29 26.65-43.8-8.35-24.16.89-34.45 21.61-28.56 13.21 3.75 22.52-13.21 24.55-51.64.35-6.62 1.43-12.17 2.86-17.08 1.75-5.99 4.04-11.02 6.21-15.89 13.8-31-11.1-50.99-65.9-46.05-102.35 9.21-136.36 50.05-114.11 98.97 11.74 25.81 41.96 82.73 75.8 99.52 7.32 3.64 14.81 5.39 22.32 4.54zm542.57-101.63c139.29 0 252.22 112.93 252.22 252.22s-112.93 252.22-252.22 252.22-252.22-112.93-252.22-252.22 112.93-252.22 252.22-252.22zm0 77.58c96.45 0 174.64 78.19 174.64 174.64 0 96.45-78.19 174.64-174.64 174.64-96.45 0-174.64-78.19-174.64-174.64 0-96.45 78.19-174.64 174.64-174.64zm-3547.06 75.57c25.9 5.43 47.02 1.51 63.34-11.77-12.96 13.44-29.55 25.46-49.76 36.03 27.73 3.69 58.76-20.87 93.07-73.68 17.7 7.28 9.85 57.91 16.4 77.36.02-.04.03-.09.04-.13 23.44-39.66 25.8-67.72 7.07-84.19-37.51-67.35-72.86-92.48-106.06-75.4-4-32.37-26.31-50.76-66.92-55.18 16.08 7.15 28.06 15.11 35.91 23.9-68.33-51.3-101.68 84.58-33.42 81.78-20.86 31.68-25.18 63.97-12.15 96.55 5.48 13.69 14.57 18.57 26.32 19.6 14.88 1.31 19.42 10.83 15.28 26.54 12.04-18.19.93-46.12 10.86-61.4zm1047.58 863.23c141.56 30.35 217.49 46.19 217.52 46.16-34.56 45.12-71.9 83.49-112 115.12 45.58 4.45 124.85-24.68 237.8-87.42l213.53 47.53c-7.15 56.6 29.36 110.9 86.11 124.55 60.87 14.65 122.3-22.95 136.97-83.85 14.65-60.87-22.98-122.3-83.85-136.97-67.62-16.32-100.35 24.07-100.35 24.07l-139.31-35.76s37.63-21.03 112.9-63.08c68.7 39.84 153.89 11.6 173.09-68.15 14.65-60.87-22.98-122.3-83.85-136.97-84.55-20.34-158.72 58.56-136.03 140.51-.23-.78-166.42 85.64-190.9 98.33-86.53-22.83-273.58-66.23-331.63 15.92zm564.54-160.58c-8.96 37.2 14.02 74.75 51.24 83.69 37.19 8.96 74.75-14.02 83.69-51.23 8.96-37.2-14.04-74.75-51.23-83.69-37.2-8.96-74.75 14.04-83.69 51.23zm37.52 279.88c-8.96 37.2 14.02 74.75 51.24 83.69 37.19 8.96 74.75-14.02 83.69-51.23 8.96-37.2-14.04-74.75-51.23-83.69-37.2-8.96-74.75 14.04-83.69 51.23zm172.45-650.04c8.61 13.36 13.27 23.83 14 31.43 2.1 11.94 16.24 28.48 42.43 49.61 24.85-14.75 49.07-19.52 72.65-14.27-24-48.01-68-20.35-60.31-93.75 7.53-71.86-30.55-145.85-110.77-113 9.55-9.79 19.67-15.79 30.39-17.99-35.3 1.8-55.08 18.94-59.36 51.42-41.86.89-47.03 65.37-56.04 92.43-7.65 22.98 1.11 45.48 28.51 68.26 10.26-8.21-18.16-39.69-4.17-72.69 30.99 29.74 62.98 44.11 95.98 43.1-19.73-4.82-36.54-11.16-50.43-19.03 18.57 7.28 37.61 5.44 57.11-5.52zm1886.68 237.16c-8.08 0-14.68 6.6-14.68 14.67v45.56c0 8.07 6.6 14.67 14.68 14.67s14.68-6.6 14.68-14.67v-45.56c0-8.07-6.6-14.67-14.68-14.67zm-166.85 0c-8.08 0-14.68 6.6-14.68 14.67v45.56c0 8.07 6.6 14.67 14.68 14.67s14.68-6.6 14.68-14.67v-45.56c0-8.07-6.6-14.67-14.68-14.67zm-166.85 0c-8.08 0-14.68 6.6-14.68 14.67v45.56c0 8.07 6.6 14.67 14.68 14.67s14.68-6.6 14.68-14.67v-45.56c0-8.07-6.6-14.67-14.68-14.67zm-481.31 931.18c11.19-49.18-60.73-17.77-99.94-74.95-3.8-.18-9.03-.42-15.7-.74-33.76-1.59-52.97-2.49-57.63-2.7-.59 3.53-1.12 6.95-1.59 10.27-4.67 33.22-3.21 55.92 4.38 68.12h170.49zM814.37 3172.1c14.94 7.3 30.56 6.28 46.85-3.05 40.97 69.15 91.35 40.03 97.76 76.64H811.27c-8.58-35.21 18.49-41.52 3.11-73.58zm-299.89-9.66c12.23 7.89 29.75 26.94 46.04 17.61 24.49 53.1 73.82 18.18 81.97 65.63H494.78c-8.15-36.08 18.44-53 19.71-83.24zm2722.84 24.24c-8.52 53.97-63.77 17.18-70.74 59.45h131.53c5.89-44.15-21.02-44.43-18.15-74.15-13.67 8.12-20.53 16.42-42.65 14.69zm-507.88-3.25c-9.6 53.54-64.42 20.43-71.38 62.7h131.53c5.45-40.83-23.64-45.45-6.47-72.29-13.67 8.12-31.57 11.31-53.68 9.58z'
			/>
			<Box
				component='path'
				sx={styles.secondaryDarker}
				d='M6088.23 3107.96c-10.2 10.91-27.19 20.49-51.02 28.73-3.89 31.92 9.22 76.1-32.02 89.12-11.83 3.73-15.61 10.3-11.12 20.32h54.66c37.34-1.55 26.68-42.66 58.01-72.03 18.17-17.04 9.01-41.36-18.51-66.15zM4301.31 1166.99c85.1 0 154.09 68.99 154.09 154.09 0 85.1-68.99 154.09-154.09 154.09-85.1 0-154.09-68.99-154.09-154.09 0-85.1 68.99-154.09 154.09-154.09zm0 47.39c58.93 0 106.7 47.77 106.7 106.69 0 58.93-47.77 106.7-106.7 106.7-58.92 0-106.69-47.77-106.69-106.7 0-58.92 47.77-106.69 106.69-106.69zm436.07 33.75h83.89c46.14 0 83.89 37.75 83.89 83.9v351.04c0 46.15-37.75 83.9-83.89 83.9h-83.89v-518.83zM3526.25 441.24c77.24 3.14 107.57 34.44 116.52 174.83 48.94-38.14 46.66-97.04-16.43-168.66-27.6-31.33-40.62-64.08-29.72-111.34 16.48-71.43-44.87-112.62-89.3-117.01-136.2-13.45-235.64 221.42-145.49 276.81 15.42-30.66 36.35-43.24 83.8-47.13 1.88-5.71 3.26-11.69 4.12-17.94.99-7.19 1.31-14.73.94-22.62-.01-.17-.02-.35-.02-.52-41.38 6.83-52.26-98.25 1.2-133.06 13.24 41.75 40.39 64.6 81.47 68.55-8.31 43.26-21.55 48.66-7.5 98.34.14-.09.28-.17.41-.26zm-600.79 809.26c32.32 8.54 46.3-.06 40.66-24.13-.25-1.08-.45-2.2-.58-3.38-43.35 8.47-79.14 6.52-102.33-7.67-6.71 1.62-13.5 2.55-20.36 2.83-39.19 1.61-17.8 30.41 39.92 29.14 14.04-.31 27.95-.69 42.68 3.2zm408.33 7.16c-17.51 23.27-25.58 68.36-71.23 86.48-3.93 9.79-9.2 19.34-15.65 28.74-13.02 18.99 11.86 16.84 55.22-24.23 14.02-13.28 26.63-32.2 47.28-50.99 15.95-14.5 10.14-30.71-15.63-40zm2322.42 373.45c28.35-9.83 45.44-4.31 49.36 25.23 2.02 15.23 6.88 21.11 18.93 15.55 18.78-8.67 26.3.52 13.16 24.54-5.01 9.15-2.55 21.86 5.64 33.23v-.7c14.13.3 29.4-13.82 45.82-42.36 38.32-63.16 24.26-105.7-42.17-127.62-64.68-26-102.2-21.53-112.55 13.41-7.87 22.63-23.24 41.9-46.12 57.83 8.18 5.97 21.2 9.29 38.35 7.66 8.81-.84 18.7-2.99 29.59-6.77zm77.82 1615.02c27.82 0 17.76-43.81 14.98-60.28-22.31 6.24-43.63.42-63.63-10.97-7.52 46.16-94.92 34.55-99.06 71.25h147.71z'
			/>
			<Box
				component='path'
				sx={styles.primaryRegular}
				d='M2044.9 1354.68c0-2.76 2.24-5 5-5s5 2.24 5 5v622.1h123.43V995.9c0-2.76 2.24-5 5-5s5 2.24 5 5v985.87c0 2.76-2.24 5-5 5H2054.9v154.42c0 2.76-2.24 5-5 5s-5-2.24-5-5v-786.51zm3086.82 938.44c-16.99-10.66-38.54-30.43-66.27-56.77-19.93 47.93-31.33 100.43-34.43 157.32 24.06 7.2 58.46 14.05 103.21 20.55-3.48-44.73-4.21-85.05-2.51-121.11zm238.02-503.41c-2.85 33.27-5.63 67.61-9.51 102.73 4.1.95 8.13 1.97 12.08 3.07 1.05-6.37 2.15-12.32 3.31-17.75 9.79-45.96 30.91-70.11 16.81-78.51-22.76-13.58-52.03-26.03-86.64-36.72-26.94-8.31-41.55-26.35-41.21-65.1-21.12-5.34-43.76-5.34-67.92 0-1.03 41.14-12.33 60.03-33.57 62.29-8.05.86-16.11 2.96-24.35 5.57 1.96 103.86 98.14 106.78 184.57 120.23 7.45-32.13 13.8-68 19.19-107.34 18.16 7.68 27.25 11.53 27.25 11.53zm-271.52 149.65c3.99-55.66 7.92-110.44 11.78-164.34-9.66 3.1-19.75 5.82-30.45 7.18-24.15 3.08-33.52 25.52-11.59 81.26 9.18 23.32 19.58 39.61 24.33 55.44 2.08 6.94 4.06 13.76 5.93 20.45zM3414.4 772.01c89.32 6.43 142.3 3.18 162.27-12.68 6.25-4.96 9.27-11.16 9.16-18.67-.2-14.8 3.29-27.17 3.38-37.61 65.42 9.33 56.44-41.71 53.55-86.96-8.95-140.39-39.28-171.69-116.52-174.83-.14.09-.28.17-.41.26-41.66 25.78-68.11 28.17-79.33 7.18-38.73 3.1-66.27 10.59-84.68 47.2-14.59 29.01-24.24 74.21-46.74 143.55-5.69 17.53-184.18 12.59-184.81 22.63-.62 9.85.89 18.99 4.53 27.42a58.34 58.34 0 003.72 7.19c148.44 35.76 227.28 30.72 236.52-15.1-3.43 39.85 1.22 65.62 13.86 79.12 6.43 6.87 14.94 10.56 25.5 11.32zm-13.53-147.42c11.71 5.7 16.96 9.92 16.29 17.3-1.78 19.77-5.99 26.58-25.36 29.34-17.62 2.51-33.33-4.89-46.03-21.39-5.91-7.67-4.37-11.8 3.66-11.13 36.04 3.01 47.51 1.09 37.41-9.46-11.82-12.34-6.06-14.45 14.03-4.66zm2276.38 1791.87c87.08-1.47 160.83-26.39 221.23-74.76 2.34-1.87 4.66-3.78 6.96-5.73-17.88-92.27-29.24-182.98-32.75-250.8-18.94-167.85-58.38-266.63-118.32-296.34-24.68 32.42-56.36 45.37-95.05 38.82-15.64 15.18-28.86 31.57-39.64 49.16-14.11 23.01-24.08 48.08-29.9 75.21-39.42 58.19-79.34 94.47-118.06 115.93-14.54 8.06-28.92 14.03-43.03 18.29-2.91.88-5.78 1.75-8.62 2.6-.67 28.65 4.43 54.55 15.32 74 6.29 11.23 14.5 20.31 24.64 26.53 32.26-8.42 74.41-31.44 126.45-69.07 10.8 145.91 20.72 243.76 29.77 293.56 1.51.15 3.01.29 4.51.42 19.42 1.75 38.24 2.47 56.49 2.16zm-1295.89 373.23l190.02-.39c15.75-.03 27.62 12.93 28.63 28.63l25.87 399.58c1.02 15.7-12.9 28.79-28.63 28.63l-237.8-2.35c-15.73-.16-29.5-12.91-28.63-28.63l21.91-396.85c.87-15.72 12.88-28.76 28.63-28.63zm-624.61-37.54c-.14 128.38 4.46 270.53 37.79 427.22 3.46-.11 6.92-.23 10.37-.35 48.19-1.61 72.28-2.42 72.28-2.42 3.12-.1 6.24-.21 9.35-.31-3.24-133.67 9.57-265.71 26.38-397.83 28.59-224.6 36.67-382.23 34.59-471.63-34.45 34.01-178.48 57.64-253.54 47.07 34.01 121.29 61.44 250.13 62.73 387.05.04 3.73.05 7.46.05 11.2zM818.38 2384.23c-3.75-21.9-7.98-43.58-12.62-64.93-62.57 19.41-217.38 11.99-252.51-42.9-34.69 52.96-37.55 177.25-15.67 376.68 11.88 108.28 9.98 161.24-3.27 181.55-41.49 63.62-45.48 158.92-28.38 276.39 2.43 16.7 5.28 33.85 8.52 51.42 12.23 7.89 29.75 26.94 46.04 17.61 2.59-20.8 5.32-40.12 8.18-58.14 34.13-214.62 86.58-244.55 118.57-391.98 6.66 12.34 10.12 24.44 11.76 37 9.57 73.51-43.48 162.55 115.33 405.16 14.94 7.3 30.56 6.28 46.85-3.05-44.23-197.53-52.89-326.93-40.21-391.53 17.43-88.77 20.02-182.64 12.42-275.31-3.26-39.71-8.39-79.21-15.02-117.98zm2047.19 105.09c124.86-5.94 209.59-41.35 254.2-106.24-134.58-133.53-259.12-213.04-373.61-238.51-23.58-5.25-47.81-.48-72.65 14.27-18.92 57.96-39.11 79.02-60.58 63.19-20.43 42.57-25.31 73.3-11.6 89.8 13.49 16.24 33.47 27.29 57.02 35.67 3.55 16.91 16.2 28.53 33.05 37.09-1.67-20.72-3.81-44.45-6.35-71.17 27.94 10.92 64.1 14.13 108.49 9.66-2.26 32.49-5.06 61.66-8.66 88.27 21.52 5.4 37.63 11.54 39.48 22.41 3.5 20.65 23.57 37.01 41.22 55.56zm2378.84 334.41l-32.36 7 7.46 272.24c.38 13.8-6.34 25.82-18.27 32.74-249.86 144.85-212.16 131.64 15.91 36.19 7.83-3.28 15.78-3.22 23.57.17 214.76 93.38 256.63 111.33 20.81-37.36-10.97-6.92-17.12-18.07-17.12-31.04l.01-279.93z'
			/>
			<Box
				component='path'
				sx={styles.primaryDark}
				d='M3551.92 570.16c22.18 57.11-22.45 79.34-133.89 66.69 77.68-7.35 122.31-29.58 133.89-66.69zm763-151.38v56.92h-25.36v-56.92c0-16.78 25.36-16.78 25.36 0zm0 556.3V926.4h-25.36v48.68c0 16.78 25.36 16.78 25.36 0zm-1938.2 1090.93c90.54-185.55 228.29-268.53 413.86-265.09 403.04 7.48 615.08 0 615.08 0 67.56 7.78 112.95 31.4 136.17 70.83.01-1.38.03-2.76.04-4.14.7-74.58-58.68-134.52-133.26-134.52h-691.78c-283.81 0-300.46 202.1-340.11 332.92zm3327.61-27.65c-33.51 23.77-72.79 51.12-117.83 82.04 1.74 23.58 3.47 45.91 5.17 66.98 47.9-35.09 85.45-84.76 112.67-149.03zm-84.65-161.55c-15.22 6.53-59.88 35.25-134.01 86.16-6.31 6.25-17.99 2.37-35.05-11.64-1.77 2.09-3.45 4.21-5.07 6.35-18.31 24.29-26.68 51.54-25.11 81.74 9.42 12.71 26.51 22.22 51.27 28.52 38.72-21.46 78.63-57.73 118.06-115.93 5.82-27.13 15.79-52.2 29.9-75.21zm-998.01 1275.75c-51.98 48.89-99.91 79.69-143.8 92.4l119.37 1.18c15.73.16 29.65-12.93 28.63-28.63l-4.21-64.95zm-270.73-301.93c89 .92 163.81-19.43 224.43-61.06-1.3-.18-2.63-.28-3.99-.28l-190.02.39c-15.75.03-27.76 12.91-28.63 28.63l-1.78 32.32zm-7.1 128.59c104.65-3.9 192.21-24.07 262.69-60.53l-4.84-74.75c-64.73 53.26-149.94 84.96-255.63 95.1l-2.22 40.17zm-8.78 159.11c134.66-16.63 228.07-44.8 280.22-84.5l-4.4-67.9c-67.06 49.87-158.06 83.52-272.98 100.96l-2.84 51.45zm-738.71 33.21c42.49-213.02 123.28-333.13 160.34-430.6-1.29-136.92-28.72-265.76-62.73-387.05-18.25-2.57-32.43-7.17-39.96-14.13-3.95-3.66-6.88-8.04-8.97-13.02-14.7 185.22-30.89 333.16-68.65 423.93-22.45 53.96-47.31 194.56-62.53 427.34.47-3.32 1-6.74 1.59-10.27 4.66.22 23.87 1.12 57.63 2.7 4.92.23 10.16.48 15.7.74l7.57.36zM771.53 2326.21c-25.9 62.26-48.47 224.56-84.29 403.72 6.66 12.34 10.12 24.44 11.76 37 51.73-88.54 102.05-185.32 134.39-264.73-3.26-39.71-8.39-79.21-15.02-117.98-3.75-21.9-7.98-43.58-12.62-64.93-9.52 2.95-21.18 5.28-34.22 6.92zm2036.92 92.62c11.45-34.62 7.02-70.59 1.18-98.52-2.82.42-13.16 2.48-16.01 2.75-1.51.17-3.53 58.14-8.77 88.28 5.77.85 17.3 4.98 23.59 7.49zm780.76-1715.48c-81.49-3.4-140.22-15.9-176.2-37.52 51.84 45.61 134.36 67.61 173.1 66.06.79-10.87 2.97-20.31 3.1-28.55z'
			/>
			<Box
				component='path'
				sx={styles.secondaryDark}
				d='M5823.65 2754.02c-34.85-73.78-83.65-186.31-146.4-337.57-18.24.31-37.07-.41-56.49-2.16 3.92 48.2 8.26 102.86 13 164 65.65 117.29 126.94 211.23 183.85 281.83 3.6-37.04 5.61-72.41 6.03-106.1zm-3803.98-363.9c.77-6.52 10.69-5.35 9.92 1.17-2.06 17.03-12.46 32.46-14.08 47.15-.91 8.26 4 14.33 24.55 16.59 6.51.71 5.44 10.63-1.09 9.92-28.37-3.13-34.93-13.37-33.37-27.6 1.72-15.53 12.06-30.59 14.08-47.23zm1801.97-457.63c38.2 62.69 77.59 102.74 118.18 120.15-.83-14.69-1.81-28.49-3.1-41.38-38.92-20.31-77.27-46.57-115.08-78.77zm354.88-1336.78c.45-.09.87-.13 1.27-.12l2.16-38.78c112.36-19.2 188.78-45.9 229.29-80.09 11.52 3.52 19.6 14.42 20.43 27.14l1.15 17.52c-94.95 53.8-179.62 84.42-254 91.85l.42-7.5c-246 50.56-532.46 87.1-781.39 40.86-9.16-1.7-6.98-2.97-14.12 2.36-69.24 51.76-204.82 47.8-285.39 41.81-5.15-.38-6.39.03-8.7 4.07-33.39 58.37-753.42 139.96-890.03 150.12-14.98 1.11-14.09-1.94-24.4 8.48-38.18 38.63-78.61 80.76-118.07 118.1-4.74 4.49-11.29-5.38-6.54-9.88 38.77-36.68 76.41-75.3 113.68-113.52 13.45-13.78 12.04-14.44 31.98-15.58 166.66-9.53 888.88-97.65 889.88-147.18.06-3.02 2.27-5.39 5.38-5.15 80.92 6.47 226.91 12.13 292.5-44.26a5.009 5.009 0 014.44-1.33c250.57 49.4 542.14 12.12 790.07-38.92zm1183.7 1296.72c3.89-35.13 6.78-71.99 9.63-105.26 0 0-8.84-4.05-27.01-11.74-5.39 39.34-12.1 77.95-19.55 110.08-21.78 93.93-52.98 155.94-97.45 179.55-52.29 27.76-88.17 101.68-94.14 228.04-7.42 157.04 41.6 342.07 4.82 488.66-40.76 162.44 126.51 93.5 199.67 58.7 164.79-78.4 213.65-286.1 55.97-580.16-97.96-182.7-52.4-183.35-31.96-367.88zm-1184.7 557.01h322.72c66.77 0 66.77 101.62 0 101.62h-322.72c-66.77 0-66.77-101.62 0-101.62zm134.25 9.99c27.49 20.41 27.49 61.22 0 81.63h188.48c53.56 0 53.65-81.63 0-81.63h-188.48zM638.08 2033.46c1.37 42.19-11.15 77.29-31.05 111.4 40.65 43.55 89.86 74.45 146.89 92.11-60.02-43.84-100.91-134.5-115.84-203.51zm296.63 245.11c-43.17 21.64-82.44 56.98-116.34 105.64 6.64 38.78 11.77 78.27 15.02 117.98 7.6 92.67 5.01 186.54-12.42 275.31-12.69 64.59-4.02 193.99 40.21 391.53 9.86 16.64 20.27 27.6 30.48 35.14 335.35-140.23-130.2-588.04 124.01-849.9-18.4-12.84-27.06-29.56-36.61-52.81-3.93-9.58-10.65-19.9-44.36-22.89zm-562.18 967.1h122.21c-8.15-36.08 18.44-53 19.71-83.24-3.23-17.57-6.09-34.72-8.52-51.42-78.74-16.26-159.46-37.98-189.35-7.64-8.77 8.9-13.16 22.28-11.84 41.59 5.86 85.99-197.34-103.8-191.53 24.86 2.04 45.05-114.37 8.33-113.2 75.85h372.52zm441.81-73.58c-158.82-242.61-105.76-331.66-115.33-405.16-13.61 23.3-11.15 239.17-9.56 277.19 3.18 76.15-51.6 86.25-120.78 77.79-2.86 18.02-5.6 37.34-8.18 58.14 24.49 53.1 73.82 18.18 81.97 65.63h20.47c57.12-2.77 105.65-8.65 146.74-17.29 1.73-21.24 17.14-30.31 4.68-56.29zM4445.7 749.37c-67.35 61.59-161.16 91.46-281.46 89.64l-3.23 57.94c-.87 15.56 12.87 28.18 28.57 28.33l80.48.79c69.78-17.23 130.14-48.35 181.07-93.37l-5.44-83.33zm-10.2-156.29c-75.96 33.34-175.77 60.16-261.21 65.45l-5.26 94.54c64.79 5.58 155.16-23.97 271.13-88.64l-4.66-71.34zm-1270.39 413.68c5.73 15.43 12.67 34.1 20.67 55.62 21.63-39.22 45.04-80.28 71.7-116.28-3.85-12.4-7.86-23.6-12.02-33.6-40.96-21.62-61.24 68.82-80.36 94.26zm-194.58 1515.79c11.01 77.67 6.85 163.91-12.48 258.71 18.16-32.35 38.3-72.75 60.36-121.24-15.3-43.43-31.26-89.25-47.88-137.46zm893.74-763.17c-16.37-10.81-43.57-18.01-81.78-23.8-2.38-.36-4.62-.58-6.72-.37-6.29.62-11.37 5.05-15.32 20.87 60.1 10.45 100.92 21.62 122.42 33.52-.48-12.56-6.66-22.35-18.59-30.22zm98.43 128.49c43.48-15.74 88.43-55.23 134.85-118.48 0 0-4.73-8.28-14.2-24.85-80.38 45.89-141.04 68.34-181.98 67.36 3.09 12.9 12.19 20.13 20.19 29.9a712.362 712.362 0 0041.14 46.06z'
			/>
			<Box
				component='path'
				sx={styles.secondaryLight}
				d='M728.88 1866.9c-1.21 44.38 4.51 75.21 18.09 81.45 80.39 36.97 119.74 44.54 118.32 22.08-1.18-18.35-5.25-44.08-11.51-67.61a200.34 200.34 0 00-9.52-3.14c-1.11-8.55.3-20.67 4.2-36.34-26.4-8.48-43.54-29-51.42-61.57 12.55 16.78 31.97 29.49 58.25 38.14.01-.03.02-.06.03-.08 22.78 14.3 43.69-7.89 62.73-66.56-6.55-19.44 1.31-70.08-16.4-77.36-34.31 52.81-65.34 77.37-93.07 73.68 20.21-10.58 36.8-22.59 49.76-36.03-16.32 13.28-37.43 17.2-63.34 11.77-9.93 15.28 1.18 43.21-10.86 61.4-4.14 15.7-16.94 37.57-36.77 63.6-6.42-1.4-12.58-2.54-18.47-3.42zm2134.33-651.57c23.19 14.19 58.98 16.14 102.33 7.67-1.26-10.95 2.68-25.89 12.31-44.94-19.97-.17-34.15-3.57-42.56-10.22-23 26-47.04 41.46-72.08 47.48zm398.79 39.33c12.23 33.31 11.47 62.35.56 89.49 45.65-18.12 53.72-63.21 71.23-86.48-29.13-10.53-33.7-22.78-40.71-54.49-13.17 7.6-27 11.55-41.49 11.84.89 9.67 4.27 22.92 10.41 39.64zm2443.57 401.69c-3.92-29.54-21.01-35.06-49.36-25.23-10.89 3.78-20.78 5.93-29.59 6.77-16.2 80.23-7.02 118.59 27.56 115.07 21.82-.48 44.34-8.42 67.56-23.8-9.11 22.95-31.53 39.76-67.26 50.43.65 22.23 2.28 38.24 4.86 48.06 38.69 6.54 70.37-6.4 95.05-38.82-7.3-21.09-10.99-40.81-11.07-59.17-8.2-11.37-10.65-24.08-5.64-33.23 13.14-24.02 5.62-33.22-13.16-24.54-12.05 5.56-16.91-.32-18.93-15.55zm-260.01 301.35c-34.71-16.58-64.17-30.8-76.85-38.17-3.92 29.98-8.37 48.05-16.02 83.65 12.25 6.23 41.93 17.37 67.58 29.53-.07-27.53 8.36-52.53 25.29-75.01zm-10.16 205.17c-10.88-19.45-15.99-45.35-15.32-74-86.58 26.18-139.34 42.84-160.89 28.79-28.38-18.5-10.68 3.28-19.58 5.44-36.21 8.81-57.12-6.25-63.31 9.07-4.82 11.93 33.68 24.14 45.55 30.46 13.23 7.04 28.21-1.26 49.55-1.12 51.48.35 105.56 7.94 163.99 1.37zm-1145.5-106.98c-13.24 9.13-24.66 9.3-41.11 20.04.93 5.1-.07 10.48-1.58 16.62-.99 4.02-2.47 7.11-4.69 9.46 72.35 27.86 130.96-38.75 78.7-26.31-17.85 4.25-34.52 3.36-31.39-.86 15.94-21.48 12.31-27.4.07-18.95zm-507.4-320.28c38.22 5.8 65.42 13 81.78 23.8-.02-6.69-.62-14.23-1.79-22.63-25.57-6.89-49.12-18.33-70.66-34.29 19.69 6.39 41.3 7.76 64.83 4.12 49.84 3.44 53.84-72.22 18.5-153.88-1.44 4.91-2.51 10.46-2.86 17.08-2.04 38.44-11.34 55.39-24.55 51.64-20.73-5.89-29.96 4.41-21.61 28.56 10.2 29.52 3.06 40.46-26.65 43.8-7.51.85-15-.91-22.32-4.54 2.03 10.73 1.57 26.05-1.39 45.96 2.11-.21 4.34.01 6.72.37zm315.07 33.82c21.45-13.88 41.25-14.76 56.61-25.42 26.38-18.31 25.26-25.5-1.48-19.29-17.86 4.15-21.54-.69-7.07-9.31 34.27-20.42 39.77-25.38 13.57-28.65-32.91-4.11-57.78 12.71-75.82 57.83 9.46 16.56 14.2 24.85 14.2 24.85zm-1466.5 339.83c-.73-7.6-5.4-18.08-14-31.43-19.5 10.97-38.54 12.81-57.11 5.52 13.89 7.86 30.7 14.2 50.43 19.03-33 1-64.99-13.36-95.98-43.1-13.98 32.99 14.43 64.48 4.17 72.69 27.34 36.05 49.92 52.8 64.3 45.53 2.59-2.89 4.54-4.19 5.86-3.91 18.73-12.01 32.24-27.67 40.49-46.96 1.2 28.04-7.98 50.65-27.53 67.86 7.32 12.8 11.04 21.96 11.22 27.58 21.47 15.83 41.66-5.23 60.58-63.19-26.19-21.13-40.33-37.67-42.43-49.61zm-67.27 284.81c20.48 26.1 29.42 60.88 21.45 95.57 27.14-18.1 53.27-56.28 84.69-120.37-5.74-6.1-9.81-13.26-11.6-21.74-23.55-8.39-43.52-19.43-57.02-35.67a29.436 29.436 0 01-3.2-4.72c-15.63 37.57-25.35 66.36-34.32 86.94zm-201.09 4.66c.85-16.03 19.96-25.55 34.38-17.47 8.08 64.8-37.15 69.56-34.38 17.47zm73.96 7.41c-11.66 7.61-21.08 18.7-26.49 32.22 41.7 28.49 74.76 49.29 103.24 58.63h22.33a69.682 69.682 0 006.28-16.53c4.18-17.37 1.4-34.8-6.54-49.38-18.18 7.88-45.55-1.03-98.83-24.94zm356.86-83.02c-44.39 4.48-80.55 1.26-108.49-9.66 9.51 99.98 13.48 158.18 7.61 173.13-23.17 59.08-51 125.91-72.32 204.17-4.98 18.31-36.9 52.83-29.14 58.44 4.78 3.45 43.23-31.89 19.88 12.46-5.92 11.25-14.18 39.99 1.53 37.25 76.96-13.41 20.87-79.66 47.61-110.67 91.49-106.09 120.72-184.22 133.31-365.13zM3134.8 689.51c-3.64-8.42-5.14-17.57-4.53-27.42-22.41-7.22-63.1-6.44-29.04 9.85 15.95 7.63-30.28 5.82-37.53 25.59-8.99 24.48 47.49 22.39 71.1-8.02zm317.06-414.87c-53.46 34.81-42.58 139.9-1.2 133.06.01.17.02.35.02.52 27.37-1.37 50.57-6.73 61.14-15.52-17.36 23.58-38.05 36.29-62.08 38.14-.86 6.24-2.24 12.23-4.12 17.94.29-.02.59-.05.88-.07 11.22 20.99 37.67 18.6 79.33-7.18-14.05-49.68-.81-55.08 7.5-98.34-41.08-3.95-68.24-26.8-81.47-68.55zm-60.06 396.62c19.37-2.76 23.58-9.58 25.36-29.34.66-7.37-4.59-11.6-16.29-17.3-20.09-9.78-25.85-7.67-14.03 4.66 10.1 10.54-1.37 12.46-37.41 9.46-8.03-.67-9.57 3.45-3.66 11.13 12.7 16.51 28.41 23.91 46.03 21.39zM702.89 1924.07c-21.74-5.33-52.39 4.86-75.9 20.19 6.57 171.96 92.77 307.43 209.64 326.14 18.79 3.29 39.57 4.91 62.74 4.93 46.99.04 74.02 14.78 75.35 29.23 3.04 33.05 81.62 106.98 51.5 12.06-4.36-13.75-18.53-27.13-38.71-40.81-42.96-29.14-93.61-51.13-138.92-77.28-114.34-65.97-97.45-169.67-145.7-274.46zm199.14 64.61c6.98 25.53-3.93 72.92-25.81 117.88 32.68 54.51 92.98 129.53 158.19 138.34 32.54-10.66 63.44-21.31 91.76-26.05-158.51-42.61-194.27-238.2-194.22-238.04-10.65.15-20.62 2.78-29.91 7.87z'
			/>
		</Box>
	);
};
