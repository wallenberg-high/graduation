import styles from "./Section.css";
import Note from "./Note";
import List from "./List";
import Image from "./Image";


const Types = {
	note: Note,
	list: List,
	image: Image
};


export default function Section({
	title,
	children})
{
	const childComponents = children.map((props, i) => {
		const Component = Types[props.type];

		return <Component key={i} {...props} />
	});

	return (
		<section className={styles.Section}>
			{title && <h1>{title}</h1>}
			<div>
				{childComponents}
			</div>
		</section>
	);
}
