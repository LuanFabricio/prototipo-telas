import {Link} from "react-router-dom";
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
			<Link to="/reporta"><button>Adicionar não conformidade</button></Link>
			<Link to="/relatorio"><button>Acessar o relatório</button></Link>
		</table>
	);
}


export default Registros;
