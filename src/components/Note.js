import styles from "./Note.css";


export default function Note({
	text})
{
	return (
		<div className={styles.Note}>
			{text}
		</div>
	);
}
