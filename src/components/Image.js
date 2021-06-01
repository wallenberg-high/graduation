import styles from "./Image.css";


export default function Image({
	url})
{
	return (
		<div className={styles.Image}>
			<img src={url}
				alt={url}
			/>
		</div>
	);
}
