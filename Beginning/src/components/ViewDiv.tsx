'use client';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
type Props = {};
const ViewDiv = (props: Props) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });
	return (
		<div className=' w-full bg-slate-400/15 flex justify-center items-center flex-col'>
			<motion.div
				className='w-full h-[100vh] text-white text-8xl font-mono justify-center font-semibold flex items-center bg-black '
				initial={{ opacity: 0 }}
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 1 }}
			>
				HI THERE
			</motion.div>
			<div
				className='w-full h-[100vh] text-white text-8xl font-mono justify-start  font-semibold flex items-center bg-black '
				ref={ref}
			>
				<span
					style={{
						transform: isInView ? 'none' : 'translateX(-200px)',
						opacity: isInView ? 1 : 0,
						transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
					}}
          className='pl-10'
				>
					HI THERE TOO
				</span>
			</div>
		</div>
	);
};
export default ViewDiv;
