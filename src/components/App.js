import styles from "./App.css";
import Section from "./Section";


export default function App({
	contents})
{
	const sections = contents.map((props, i) => <Section key={i} {...props} />);

	return (
		<div className={styles.App}>
			{sections}
		</div>
	);
}
