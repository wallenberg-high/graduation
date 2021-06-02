import {ErrorBoundary} from "react-error-boundary";
import styles from "./App.css";
import Section from "./Section";
import Fireworks from "./Fireworks";


const Fallback = () => <div />;


export default function App({
	contents})
{
	const sections = contents.map((props, i) => <Section key={i} {...props} />);

	return (
		<div className={styles.App}>
			{sections}
			<ErrorBoundary FallbackComponent={Fallback}>
				<Fireworks />
			</ErrorBoundary>
		</div>
	);
}
