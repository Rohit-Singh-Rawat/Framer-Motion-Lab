'use client';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';

type Props = {};
const GestureDiv = (props: Props) => {
	return (
		<div className='h-screen w-full bg-slate-400/5 flex justify-center items-center flex-col'>
			<MotionConfig
				transition={{
					duration: 0.2,
					ease: 'easeInOut',
				}}
			>
				<motion.button
					drag
					whileDrag={{ scale: 0.5 }}
					className='px-2 font-mono shadow-xl hover:shadow-black/30   shadow-black/50 py-1 border-2 border-black rounded m-5 hover:bg-gray-500/10 font-medium active:bg-slate-300/50 active:border-black/50'
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95, rotate: '20.5deg' }}
				>
					Click me???
				</motion.button>
				<motion.button
					className='px-2 font-mono shadow-xl hover:shadow-black/30   shadow-black/50 py-1 border-2 border-black rounded m-5 hover:bg-gray-500/10 font-medium active:bg-slate-300/50 active:border-black/50'
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95, rotate: '-20.5deg' }}
				>
					Click me Too???
				</motion.button>
			</MotionConfig>
		</div>
	);
};
export default GestureDiv;
