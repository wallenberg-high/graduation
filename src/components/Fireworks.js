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


export default function Fireworks()
{
	const [enabled, setEnabled] = useState(false);
	const [fireworks, setFireworks] = useState(null);
	const containerRef = useCallback(el => {
		if (el && !fireworks) {
			setFireworks(new FW({
				...FireworksSettings,
				target: el,
				boundaries: {
					top: FireworksPadding,
					left: FireworksPadding,
					right: el.clientWidth - FireworksPadding,
					bottom: el.clientHeight - FireworksPadding
				}
			}));
		}
	}, []);
	const handleScroll = throttle(250, () => {
		setEnabled(Math.abs(document.body.offsetHeight - window.pageYOffset)
			<= 2 * window.innerHeight);
	});

	useEffect(() => {
		const handler = window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener(handler);
	}, []);

	if (fireworks) {
		if (enabled && !fireworks.isRunning) {
			fireworks.start();
		} else if (!enabled && fireworks.isRunning) {
			fireworks.pause();
		}
	}

	return (
		<section
			className={styles.Fireworks}
		>
			<div
				ref={containerRef}
				className={styles.FW}
			/>
			<h1>Congratulations to the Class of 2021!</h1>
			<img src="img/bulldog.png" alt="bulldog" />
		</section>
	);
}
