import GraficoBarra from "../componentes/GraficoBarra";
import Seletor from "../componentes/Seletor";

function criaChartData(labelName, dados) {
	const data = [];
	const labels = [];

	dados.forEach(val => {
		labels.push(val.name);
		data.push(val.value);
	});


	return {
		labels,
		datasets: [
			{
				label: labelName,
				data,
				backgroundColor: [
					"rgba(0, 42, 255, 1)",
				]
			}
		]
	}
}

function Relatorio() {
	const funcionarios = ["funcionario1", "funcionario2", "funcionario3"];
	const setores = ["setor1", "setor2"];
	const auditores = ["auditor1", "auditor2"];

	const funcionariosData = [
		{
			name: "funcionario1",
			value: 3
		},
		{
			name: "funcionario2",
			value: 8
		},
		{
			name: "funcionario3",
			value: 42
		},
	]

	const chartData1 = criaChartData("NCs", funcionariosData);

	const chartData2 = {
		labels: setores,
		datasets: [
			{
				label: "NCs",
				data: [50, 3],
				backgroundColor: [
					"rgba(0, 42, 255, 1)",
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
				]
			}
		]
	}

	return (
		<div id="container-fluid">
			<div className="row text-center">
				<Seletor opcoes={funcionarios} titulo="Funcionarios"/>
				<Seletor opcoes={setores} titulo="Setores"/>
				<Seletor opcoes={auditores} titulo="Auditores"/>
			</div>
			<div className="col-xs-1" align="center">
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
		</div>
	)
}

export default Relatorio;
