import styles from "./List.css";


export default function List({
	title = "",
	items})
{
	const itemList = items.map((name, i) => <li key={i}>{name}</li>);

	return (
		<div className={styles.List}>
			{title && <h2>{title}</h2>}
			<ul>
				{itemList}
			</ul>
		</div>
	);
}
