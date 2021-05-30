import styles from "./Note.css";


export default function Note(
	{text})
{
	return (
		<div className={styles.Note}>
			{text}
		</div>
	);
//	return (
//		<tr className={styles.Note}>
//			<td colSpan="2">{text}</td>
//		</tr>
//	);
}
