import styles from "./App.css";
import Section from "./Section";


export default function App({
	sections})
{
	const sectionComponents = sections.map((props, i) => <Section key={i} {...props} />);

	return (
		<div className={styles.App}>
			{sectionComponents}
		</div>
	);
}
