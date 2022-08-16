import {Link} from "react-router-dom";
import Linha from "../componentes/Linha";


function Registros() {

	const colunas = ["Profissional", "Cargo", "Setor", "Não Conformidade", "Status"];

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
			<Linha valores={["P1", "C1", "S1", "NC1", "resolvido"]}/>
			<Linha valores={["P2", "C2", "S2", "NC2", "em progresso"]}/>
			<th>
				<Link to="/reporta"><button>Reportar não conformidade</button></Link>
				<Link to="/relatorio"><button>Acessar o relatório</button></Link>
			</th>
			<th>
				<Link to="/cadastra_nc"><button>Cadastrar/Atualizar Não Conformidade</button></Link>
			</th>
			<th>
				<Link to="/remove_nc"><button>Remover Não Conformidade</button></Link>
			</th>
		</table>
	);
}


export default Registros;
