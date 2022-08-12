function Seletor({opcoes}) {
	const style = {
		display: "column"
	}

	return (
		<div>
		{
			opcoes.map((val, index) => {
				return (
					<div style={style}>
					<label>{val}</label>
					<input key={index} type="checkbox"/>
					</div>
				);
			})
		}
		</div>
	);
}

export default Seletor;
