
const padding = {
	margin: "100px",
}

function Linha({valores}) {
	return (
		<tr>
		{
			valores.map((val, key) => {
				return (
					<th 
						className="border border-dark" 
						key={key}>
						{val}
					</th>
				);
			})
		}
		<th><button className="btn btn-default">Editar</button></th>
		</tr>
	);
}

export default Linha;
