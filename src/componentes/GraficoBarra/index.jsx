import { Bar } from "react-chartjs-2";
import { 
	Chart as ChartJS, 
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

function GraficoBarra({titulo, chartData}) {

	const options = {
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: titulo
			},
			legend: {
				display: true,
				position: "bottom"
			}
		}
	};

	console.log(chartData);

	return (
		<Bar options={options} data={chartData} style={
			{
				maxWidth: "950px",
				maxHeight: "650px",
			}
		}/>
	);
}

export default GraficoBarra;
