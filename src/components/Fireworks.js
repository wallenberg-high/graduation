import {useEffect, useState} from "react";
import {throttle} from "throttle-debounce";


export default function Fireworks(
	props)
{
	const [message, setMessage] = useState("");


	const handleScroll = throttle(250, () => {
		if (Math.abs(window.innerHeight + window.pageYOffset -
				document.body.offsetHeight) < 50) {
			setMessage("BOTTOM");
		} else {
			setMessage("");
		}
	});


	useEffect(() => {
		const handler = window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener(handler);
	}, []);

	return (
		<div
			style={{
				height: "50px",
				backgroundColor: message ? "red" : "transparent"
			}}
		>
			{message}
		</div>
	);
}
