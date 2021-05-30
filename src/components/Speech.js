import styles from "./Speech.css";


export default function Speech({
	title,
	presenters})
{
	const presenterList = presenters.map((name, i) => <li key={i}>{name}</li>);

	return (
		<table className={styles.Speech}>
			<tbody>
				<tr>
					<td>{title}</td>
					<td>
						<ul>
							{presenterList}
						</ul>
					</td>
				</tr>
			</tbody>
		</table>
	);
//	return (
//		<tr className={styles.Speech}>
//			<td>{title}</td>
//			<td>
//				<ul>
//					{presenterList}
//				</ul>
//			</td>
//		</tr>
//	);
}
