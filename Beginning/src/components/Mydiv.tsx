'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type Props = {};

const Mydiv = (props: Props) => {
	const [isVisible, setIsVisible] = useState(true);
	return (
		<div className='h-screen  w-full bg-gray-400/0 flex justify-center items-center flex-col'>
			<motion.button
				className='px-2 font-mono shadow-xl hover:shadow-black/30   shadow-black/50 py-1 border-2 border-black rounded m-5 hover:bg-gray-500/10 font-medium active:bg-slate-300/50 active:border-black/50'
				layout
				onClick={() => {
					setIsVisible((s) => !s);
				}}
			>
				SHOW / HIDE
			</motion.button>
			<AnimatePresence mode='popLayout'>
				{isVisible && (
					<motion.svg
						className='size-40 '
						initial={{ rotate: '0deg', scale: 0, y: 0 }}
						animate={{
							rotate: ['360deg', '-360deg'],
							scale: 1,
							y: [0, 150, -150, -150, 0],
						}}
						exit={{ rotate: '0deg', scale: 0, y: 0 }}
						transition={{ duration: 5, ease: 'backInOut', times: [0, 0.25, 0.5, 0.7, 1] }}
						xmlns='http://www.w3.org/2000/svg'
						width='512'
						height='512'
						enable-background='new 0 0 512 512'
						viewBox='0 0 512 512'
						id='flower'
					>
						<g>
							<circle
								cx='256'
								cy='256'
								r='26.5'
								fill='none'
								stroke='#000'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-miterlimit='10'
								stroke-width='5'
							></circle>
							<path
								fill='none'
								stroke='#000'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-miterlimit='10'
								stroke-width='5'
								d='   M230.64,89.14c3.03-37.18,11.76-64.04,22.06-64.04c10.22,0,18.89,26.44,21.99,63.16c0.779,9.33,1.21,19.32,1.21,29.71   c0,41.86-6.92,77.26-16.44,88.85c-2.14,2.61-4.41,4.01-6.76,4.01c-2.1,0-4.14-1.12-6.08-3.23'
							></path>
							<path
								fill='none'
								stroke='#000'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-miterlimit='10'
								stroke-width='5'
								d='   M188.32,101.39c-6.7-36.69-5.21-64.9,4.73-67.57c9.87-2.64,25.09,20.65,37.59,55.32c3.17,8.8,6.17,18.34,8.86,28.38   c10.83,40.44,13.31,76.43,7.12,90.08c-1.39,3.07-3.23,5.01-5.5,5.62c-2.03,0.55-4.29-0.01-6.71-1.55'
							></path>
							<path
								fill='none'
								stroke='#000'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-miterlimit='10'
								stroke-width='5'
								d='   M150.6,124.17c-15.96-33.71-21.82-61.34-12.91-66.48c8.85-5.11,29.58,13.45,50.63,43.7c5.34,7.69,10.7,16.12,15.9,25.12   c20.93,36.26,32.63,70.37,30.19,85.16c-0.55,3.33-1.81,5.68-3.85,6.86c-1.83,1.05-4.16,1.1-6.89,0.24'
							></path>
							<path
								fill='none'
								stroke='#000'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-miterlimit='10'
								stroke-width='5'
								d='   M215.14,228.41c2.86,0.12,5.1-0.53,6.59-2.02c1.66-1.66,2.28-4.26,1.94-7.62c-1.47-14.93-21.61-44.85-51.2-74.45   c-7.35-7.35-14.72-14.11-21.87-20.15v-0.01c-28.15-23.76-52.98-36.32-60.2-29.1c-7.28,7.28,5.54,32.46,29.7,60.9'
							></path>
							<path
								fill='none'
								stroke='#000'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-miterlimit='10'
								stroke-width='5'
								d='   M98.82,194.54c-30.69-21.22-49.58-42.22-44.43-51.13c5.1-8.85,32.35-3.14,65.71,12.55c8.46,3.98,17.32,8.6,26.31,13.79   c36.26,20.93,63.45,44.63,68.73,58.66c1.19,3.16,1.27,5.82,0.09,7.86c-1.06,1.82-3.05,3.03-5.85,3.65'
							></path>
							<path
								fill='none'
								stroke='#000'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-miterlimit='10'
								stroke-width='5'
								d='   M206.82,252.54c2.53-1.33,4.15-3.01,4.69-5.04c0.61-2.27-0.16-4.83-2.13-7.58c-8.73-12.18-41.12-28.03-81.56-38.87   c-10.03-2.69-19.79-4.86-29-6.51c-0.01-0.01-0.01-0.01-0.01-0.01c-36.27-6.51-64.05-4.97-66.69,4.9   c-2.67,9.94,21.02,25.33,56.15,37.88'
							></path>
							<path
								fill='none'
								stroke='#000'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-miterlimit='10'
								stroke-width='5'
								d='   M89.14,281.36C51.96,278.33,25.1,269.6,25.1,259.3c0-10.22,26.45-18.89,63.17-21.99c9.33-0.78,19.31-1.21,29.7-1.21   c41.86,0,77.26,6.92,88.85,16.44c2.61,2.14,4.01,4.41,4.01,6.76c0,2.101-1.12,4.141-3.23,6.08'
							></path>
							<path
								fill='none'
								stroke='#000'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-miterlimit='10'
								stroke-width='5'
								d='   M211.67,277.59c1.54-2.42,2.1-4.68,1.55-6.71c-0.61-2.27-2.55-4.11-5.62-5.5c-13.65-6.189-49.64-3.71-90.08,7.12   c-10.04,2.69-19.58,5.69-28.38,8.86c-34.67,12.5-57.96,27.72-55.32,37.59c2.67,9.95,30.88,11.43,67.57,4.729h0.01'
							></path>
							<path
								fill='none'
								stroke='#000'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-miterlimit='10'
								stroke-width='5'
								d='   M218.77,288.33c0.86-2.73,0.81-5.061-0.24-6.89c-1.18-2.04-3.53-3.301-6.86-3.851c-14.79-2.439-48.9,9.26-85.16,30.19   c-8.99,5.189-17.43,10.56-25.11,15.899h-0.01c-30.25,21.051-48.81,41.78-43.7,50.63c5.14,8.91,32.77,3.051,66.48-12.909'
							></path>
							<path
								fill='none'
								stroke='#000'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-miterlimit='10'
								stroke-width='5'
								d='   M228.41,296.86c0.12-2.86-0.53-5.101-2.02-6.591c-1.66-1.659-4.26-2.279-7.62-1.939c-14.93,1.47-44.85,21.61-74.45,51.2   c-7.35,7.35-14.11,14.72-20.15,21.87h-0.01C100.4,389.55,87.84,414.38,95.06,421.6c7.28,7.28,32.46-5.54,60.9-29.699'
							></path>
							<path
								fill='none'
								stroke='#000'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-miterlimit='10'
								stroke-width='5'
								d='   M194.54,413.18c-21.22,30.69-42.22,49.58-51.13,44.431c-8.85-5.101-3.14-32.351,12.55-65.71c3.98-8.46,8.6-17.32,13.79-26.311   c20.93-36.26,44.63-63.45,58.66-68.729c3.16-1.19,5.82-1.271,7.86-0.091c1.82,1.061,3.03,3.051,3.65,5.851'
							></path>
							<path
								fill='none'
								stroke='#000'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-miterlimit='10'
								stroke-width='5'
								d='   M252.54,305.18c-1.33-2.529-3.01-4.149-5.04-4.689c-2.27-0.61-4.83,0.16-7.58,2.13c-12.18,8.729-28.03,41.12-38.87,81.56   c-2.69,10.03-4.86,19.79-6.51,29c-0.01,0.011-0.01,0.011-0.01,0.011c-6.51,36.27-4.97,64.05,4.9,66.689   c9.94,2.67,25.33-21.02,37.88-56.149'
							></path>
							<path
								fill='none'
								stroke='#000'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-miterlimit='10'
								stroke-width='5'
								d='   M281.36,422.86c-3.03,37.17-11.761,64.04-22.061,64.04c-10.22,0-18.89-26.45-21.99-63.17c-0.78-9.33-1.21-19.311-1.21-29.7   c0-41.86,6.92-77.261,16.44-88.851c2.14-2.609,4.41-4.01,6.76-4.01c2.101,0,4.141,1.12,6.08,3.23'
							></path>
							<path
								fill='none'
								stroke='#000'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-miterlimit='10'
								stroke-width='5'
								d='   M277.59,300.33c-2.42-1.54-4.68-2.1-6.71-1.55c-2.27,0.609-4.11,2.55-5.5,5.62c-6.189,13.649-3.71,49.64,7.12,90.08   c2.69,10.039,5.69,19.579,8.86,28.38c12.5,34.67,27.72,57.96,37.59,55.319c9.95-2.67,11.43-30.88,4.729-67.569V410.6'
							></path>
							<path
								fill='none'
								stroke='#000'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-miterlimit='10'
								stroke-width='5'
								d='   M288.33,293.23c-2.73-0.86-5.061-0.811-6.89,0.239c-2.04,1.181-3.301,3.53-3.851,6.86c-2.439,14.79,9.26,48.9,30.19,85.16   c5.189,8.99,10.56,17.43,15.899,25.109v0.011c21.051,30.25,41.78,48.81,50.63,43.699c8.91-5.14,3.051-32.77-12.909-66.479'
							></path>
							<path
								fill='none'
								stroke='#000'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-miterlimit='10'
								stroke-width='5'
								d='   M296.86,283.59c-2.86-0.12-5.101,0.53-6.591,2.021c-1.659,1.659-2.279,4.26-1.939,7.62c1.47,14.93,21.61,44.85,51.2,74.449   c7.35,7.351,14.72,14.11,21.87,20.15v0.01c28.149,23.76,52.979,36.32,60.199,29.101c7.28-7.28-5.54-32.46-29.699-60.9'
							></path>
							<path
								fill='none'
								stroke='#000'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-miterlimit='10'
								stroke-width='5'
								d='   M413.18,317.46c30.69,21.21,49.58,42.21,44.431,51.13c-5.101,8.851-32.351,3.141-65.71-12.55c-8.46-3.98-17.32-8.6-26.311-13.79   c-36.26-20.93-63.45-44.63-68.729-58.66c-1.19-3.16-1.271-5.82-0.091-7.859c1.051-1.82,3.051-3.03,5.851-3.66'
							></path>
							<path
								fill='none'
								stroke='#000'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-miterlimit='10'
								stroke-width='5'
								d='   M305.18,259.46c-2.529,1.33-4.149,3.01-4.689,5.04c-0.61,2.27,0.149,4.83,2.13,7.57c8.71,12.18,41.11,28.04,81.56,38.88   c10.03,2.689,19.79,4.859,29,6.51c0.011,0.01,0.011,0.01,0.011,0.01c36.27,6.511,64.05,4.971,66.689-4.899   c2.67-9.94-21.02-25.33-56.149-37.88'
							></path>
							<path
								fill='none'
								stroke='#000'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-miterlimit='10'
								stroke-width='5'
								d='   M422.86,230.64c37.17,3.03,64.04,11.76,64.04,22.06c0,10.22-26.45,18.89-63.17,21.99c-9.33,0.779-19.311,1.21-29.7,1.21   c-41.86,0-77.261-6.92-88.851-16.44c-2.609-2.14-4.01-4.41-4.01-6.76c0-2.1,1.12-4.14,3.23-6.08'
							></path>
							<path
								fill='none'
								stroke='#000'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-miterlimit='10'
								stroke-width='5'
								d='   M300.33,234.41c-1.54,2.42-2.1,4.68-1.55,6.71c0.609,2.27,2.55,4.11,5.62,5.5c13.649,6.19,49.64,3.71,90.08-7.12   c10.039-2.69,19.579-5.69,28.38-8.86c34.67-12.5,57.96-27.72,55.319-37.59c-2.67-9.95-30.88-11.43-67.569-4.73H410.6'
							></path>
							<path
								fill='none'
								stroke='#000'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-miterlimit='10'
								stroke-width='5'
								d='   M293.23,223.67c-0.86,2.73-0.811,5.06,0.239,6.89c1.181,2.04,3.53,3.3,6.86,3.85c14.79,2.44,48.9-9.26,85.16-30.19   c8.99-5.19,17.43-10.56,25.109-15.9h0.011c30.25-21.05,48.81-41.78,43.699-50.63c-5.14-8.91-32.77-3.05-66.479,12.91'
							></path>
							<path
								fill='none'
								stroke='#000'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-miterlimit='10'
								stroke-width='5'
								d='   M283.59,215.14c-0.12,2.86,0.53,5.1,2.021,6.59c1.659,1.66,4.26,2.28,7.62,1.94c14.93-1.47,44.85-21.61,74.449-51.2   c7.351-7.35,14.11-14.72,20.15-21.87h0.01c23.76-28.15,36.32-52.98,29.101-60.2c-7.28-7.28-32.46,5.54-60.9,29.69v0.01'
							></path>
							<path
								fill='none'
								stroke='#000'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-miterlimit='10'
								stroke-width='5'
								d='   M317.46,98.82c21.22-30.69,42.21-49.58,51.13-44.44c8.851,5.11,3.141,32.36-12.55,65.72c-3.98,8.46-8.6,17.32-13.79,26.31   c-20.93,36.26-44.63,63.45-58.66,68.73c-3.16,1.19-5.82,1.27-7.859,0.09c-1.82-1.06-3.03-3.05-3.65-5.85'
							></path>
							<path
								fill='none'
								stroke='#000'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-miterlimit='10'
								stroke-width='5'
								d='   M259.46,206.82c1.33,2.53,3.01,4.15,5.04,4.69c2.27,0.61,4.83-0.16,7.58-2.13c12.18-8.73,28.03-41.12,38.87-81.56   c2.689-10.03,4.859-19.79,6.51-29c0.01-0.01,0.01-0.01,0.01-0.01c6.511-36.27,4.971-64.05-4.899-66.7   c-9.94-2.66-25.33,21.03-37.88,56.15'
							></path>
						</g>
					</motion.svg>
				)}
			</AnimatePresence>
		</div>
	);
};
export default Mydiv;
