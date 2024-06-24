'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Mydiv from '../components/Mydiv';
import GestureDiv from '@/components/GestureDiv';
import AnimationDiv from '@/components/AnimationDiv';
import ViewDiv from '@/components/ViewDiv'; 

export default function Home() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress);
	const background = useTransform(scrollYProgress, [0, 0.75, 1], ['black', 'black', 'red']);
	return (
		<div className=' bg-white text-center'>
			{/*  A Scroll Div */}
			<motion.div
				style={{
					scaleX,
					transformOrigin: 'left',
					position: 'sticky',
					background,
					top: 0,
					width: '100%',
					height: '5px',
				}}
			/>

			{/*  framer Basics */}
			<Mydiv />
			<GestureDiv />
			<AnimationDiv />
			<ViewDiv />
		</div>
	);
}
