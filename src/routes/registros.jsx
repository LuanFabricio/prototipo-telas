import Linha from "../componentes/Linha";


function Registros() {

	const colunas = ["Funcionario", "Cargo", "Setor", "Não Conformidade", "Status"];

	return (
		<table align="center">
			{
			colunas.map((val, index) => {
				return (
					<th
						className="border border-dark"
						key={index}
						>
						{val}
					</th>
				);
			})
			}
			<Linha valores={["F1", "C1", "S1", "NC1", "resolvido"]}/>
			<Linha valores={["F2", "C2", "S2", "NC2", "em progresso"]}/>
		</table>
	);
}


export default Registros;
