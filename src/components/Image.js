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
//	return (
//		<div className={styles.Image}
//			style={{
//				backgroundImage: `url("${url}")`
//			}}
//		/>
//	);
//	return (
//		<img className={styles.Image}
//			src={url}
//			alt={url}
//		/>
//	);
}
