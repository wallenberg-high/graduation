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
					<td>
						<h2>{title}</h2>
					</td>
					<td>
						<ul>
							{presenterList}
						</ul>
					</td>
				</tr>
			</tbody>
		</table>
	);
}
