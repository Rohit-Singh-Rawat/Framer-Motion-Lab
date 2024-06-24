'use client';
import { animationControls, motion } from 'framer-motion';
import { useEffect } from 'react';
type Props = {};
const AnimationDiv = (props: Props) => {
	const controls = animationControls();
	const handleClick = () => {
		controls.mount();
		controls.start('flip')
	};
	return (
		<div className='h-screen w-full bg-slate-400/10 flex justify-center items-center flex-col'>
			<button
				className='px-2 font-mono shadow-xl hover:shadow-black/30   shadow-black/50 py-1 border-2 border-black rounded m-5 hover:bg-gray-500/10 font-medium active:bg-slate-300/50 active:border-black/50'
				onClick={handleClick}
			>
				Flip It
			</button>
			<motion.div
				className='size-40 text-white text-2xl font-mono justify-center font-semibold flex items-center bg-black rounded-lg'
				variants={{
					initial: {
						rotateX: '0deg',
					},
					flip: {
						rotateX: ['360deg','0deg'],
					},
				}}
				initial='initial'
				transition={{ duration: 1 }}
				animate={controls}
			>HI THERE</motion.div>
		</div>
	);
};
export default AnimationDiv;
