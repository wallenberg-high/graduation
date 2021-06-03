import {useEffect, useState, useCallback} from "react";
import {throttle} from "throttle-debounce";
import {Fireworks as FW} from "fireworks-js";
import styles from "./Fireworks.css";


const FireworksSettings = {
	hue: 120,
	startDelay: 1,
	minDelay: 14,
	maxDelay: 26,
	speed: 10,
	acceleration: 1.1,
	friction: 1,
	gravity: 1,
	particles: 90,
	trace: 3,
	explosion: 6,
	boundaries: {
		top: 50,
		bottom: 1163,
		left: 50,
		right: 2100
	},
	sound: {
		enable: false,
		list: [
			"https://crashmax-dev.github.io/fireworks-js/explosion0.mp3",
			"https://crashmax-dev.github.io/fireworks-js/explosion1.mp3",
			"https://crashmax-dev.github.io/fireworks-js/explosion2.mp3"
		],
		min: 4,
		max: 8
	}
};
const FireworksPadding = 50;


export default function Fireworks(
	props)
{
	const containerRef = useCallback(el => {
		if (el && !fireworks) {
			fireworks = new FW({
				...FireworksSettings,
				target: el,
				boundaries: {
					top: FireworksPadding,
					left: FireworksPadding,
					right: el.clientWidth - FireworksPadding,
					bottom: el.clientHeight - FireworksPadding
				}
			});
			fireworks.start();
		}
	});
	let fireworks;


//	const handleScroll = throttle(250, () => {
//		if (Math.abs(window.innerHeight + window.pageYOffset -
//				document.body.offsetHeight) < 50) {
//		} else {
//		}
//	});
//
//
//	useEffect(() => {
//		const handler = window.addEventListener("scroll", handleScroll);
//
//		return () => window.removeEventListener(handler);
//	}, []);

	return (
		<div
			className={styles.Fireworks}
		>
			<div
				ref={containerRef}
				className={styles.FW}
			/>
			<h1>Congratulations to the Class of 2021!</h1>
			<img src="img/bulldog.png" alt="bulldog" />
		</div>
	);
}
