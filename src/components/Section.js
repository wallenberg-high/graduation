import styles from "./Section.css";
import Speech from "./Speech";
import Note from "./Note";
import List from "./List";


const Types = {
	speech: Speech,
	note: Note,
	list: List
};
const Containers = {
	table: ({children}) => <table><tbody>{children}</tbody></table>,
	div: ({children}) => <div>{children}</div>
};


export default function Section({
	title,
	layout = "div",
	children})
{
	const Container = Containers[layout];
	const childComponents = children.map((props, i) => {
		const Component = Types[props.type];

		return <Component key={i} {...props} />
	});

	return (
		<section className={styles.Section}>
			<h1>{title}</h1>
			<Container>
				{childComponents}
			</Container>
		</section>
	);
}
