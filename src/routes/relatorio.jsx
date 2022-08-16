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
	const setores = ["setor1", "setor2", "setor3"];
	const auditores = ["auditor1", "auditor2", "auditor3"];

	const profissionaisData = [
		{
			name: "profissional1",
			value: 3
		},
		{
			name: "profissional2",
			value: 8
		},
		{
			name: "profissional3",
			value: 42
		},
	];
	const profissionais = profissionaisData.map(val => val.name);

	const chartData1 = criaChartData("NCs", profissionaisData);

	const chartData2 = {
		labels: setores,
		datasets: [
			{
				label: "NCs",
				data: [50, 3, 19],
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
				data: [11, 42, 255],
				backgroundColor: [
					"rgba(0, 42, 255, 1)",
				]
			}
		]
	}

	return (
		<div id="container-fluid">
			<div className="row text-center">
				<Seletor opcoes={profissionais} titulo="Profissionais"/>
				<Seletor opcoes={setores} titulo="Setores"/>
				<Seletor opcoes={auditores} titulo="Auditores"/>
			</div>
			<div className="col-xs-1" align="center">
				<GraficoBarra 
					titulo="Não conformidade por profissional" 
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
