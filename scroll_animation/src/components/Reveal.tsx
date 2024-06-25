'use  client';
import { AnimatePresence, motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

type Props = { children: JSX.Element; width?: 'fit-content' | '100%' };
const Reveal = ({ children, width = 'fit-content' }: Props) => {
	const ref = useRef(null);
	const isInView = useInView(ref);
	const controls = useAnimation();
	useEffect(() => {
		if (isInView) {
			controls.start('visible');
		} else if (!isInView) {
			controls.start('hidden');
		}
	}, [isInView]);
	return (
		<div
			ref={ref}
			className='pr-10'
			style={{ position: 'relative', width, overflow: 'hidden' }}
		>
			<motion.div
				variants={{
					hidden: {
						opacity: 0,
						y: 80,
						transition: { duration: 0.01, delay: 0 },
					},
					visible: {
						opacity: 1,
						y: 0,
					},
				}}
				initial='hidden'
				animate={controls}
				transition={{ duration: 0.5, delay: 0.5 }}
			>
				{children}
			</motion.div>
			<motion.div
				className='rounded-full'
				style={{ width: '100%', height: '5px', background: 'white' }}
				variants={{
					hidden: {
						opacity: 0,
						x: -500,
						transition: { duration: 0.01, delay: 0 },
					},
					visible: {
						opacity: 1,
						x: 0,
					},
				}}
				initial='hidden'
				animate={controls}
				transition={{
					type: 'spring',
					damping: 10,
					mass: 0.75,
					stiffness: 100,
					duration: 1,
					delay: 0.8,
				}}
			/>
		</div>
	);
};
export default Reveal;
