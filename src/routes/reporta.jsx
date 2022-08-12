import {useState} from "react";
// import IdMedico from '../componentes/idMedico';
import NaoConformidade from '../componentes/NaoConformidade';
import Auditor from '../componentes/Auditor';
import Documento from "../componentes/Documento";
import "../App.css";

function Reporta() {

	const [quantNaoConformidades, setQuantNaoConformidades] = useState(1);
	
	const submit = (event) => {
		event.preventDefault();
	};

	let current_date = new Date(new Date().toLocaleDateString()).toISOString().split("T")[0];
	console.log(current_date);

	const componentesNC = [];
	for (let i = 0 ;  i < quantNaoConformidades ; i ++) {
		componentesNC.push(<NaoConformidade key={i}/>);
	}

	return (
		<div className="App">
		<form onSubmit={submit}>
			<Auditor/>
			<Documento/>
			<label>Quantidade de não conformidades</label>
			<input 
				min="1"
				max="5"
				type="number" 
				value={quantNaoConformidades}
				onChange={e => setQuantNaoConformidades(e.target.value)}/><br/>
			{componentesNC}
			<button>Enviar</button>
		</form>
		</div>
	);
}

export default Reporta;
