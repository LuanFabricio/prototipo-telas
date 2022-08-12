import GraficoBarra from "../componentes/GraficoBarra";
import Seletor from "../componentes/Seletor";

function Relatorio() {
	const funcionarios = ["funcionario1", "funcionario2", "funcionario3"];
	const setores = ["setor1", "setor2"];
	const auditores = ["auditor1", "auditor2"];

	const chartData1 = {
		labels: funcionarios,
		datasets: [
			{
				label: "NCs",
				data: [3, 8, 42],
				backgroundColor: [
					"rgba(0, 42, 255, 1)",
					"rgba(242, 255, 42, 1)",
					"rgba(42, 255, 42, 1)",
					"rgba(42, 42, 42, 1)",
					"rgba(255, 42, 0, 1)",
				]
			}
		]
	};

	const chartData2 = {
		labels: setores,
		datasets: [
			{
				label: "NCs",
				data: [50, 3],
				backgroundColor: [
					"rgba(0, 42, 255, 1)",
					"rgba(242, 255, 42, 1)",
					"rgba(42, 255, 42, 1)",
					"rgba(42, 42, 42, 1)",
					"rgba(255, 42, 0, 1)",
				]
			}
		]
	}
	
	const chartData3 = {
		labels: auditores,
		datasets: [
			{
				label: "NCs",
				data: [11, 42],
				backgroundColor: [
					"rgba(0, 42, 255, 1)",
					"rgba(242, 255, 42, 1)",
					"rgba(42, 255, 42, 1)",
					"rgba(42, 42, 42, 1)",
					"rgba(255, 42, 0, 1)",
				]
			}
		]
	}

	return (
		<div id="">
			<Seletor opcoes={funcionarios}/>
			<Seletor opcoes={setores}/>
			<Seletor opcoes={auditores}/>
			<GraficoBarra 
				titulo="Não conformidade por funcionario" 
				chartData={chartData1}/>
			<GraficoBarra 
				titulo="Não conformidade por setor" 
				chartData={chartData2}/>
			<GraficoBarra 
				titulo="Não conformidade registrada por auditor" 
				chartData={chartData3}/>
		</div>
	)
}

export default Relatorio;
