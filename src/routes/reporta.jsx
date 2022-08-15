import {useState} from "react";
import {Link} from "react-router-dom";
import NaoConformidade from '../componentes/NaoConformidade';
import Auditor from '../componentes/Auditor';
import Documento from "../componentes/Documento";
import "../App.css";

const style = {
	position: "absolute",
	left: "50%",
	"-webkit-transform": "translate(-50%, 0%)",
	transform: "translate(-50%, 0%)",
};

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
		<div className="App" style={style}>
		<form onSubmit={submit}>
			<Auditor/>
			<Documento className="reporta-form"/>
			<label>Quantidade de não conformidades</label>
			<input 
				min="1"
				max="5"
				type="number" 
				value={quantNaoConformidades}
				onChange={e => setQuantNaoConformidades(e.target.value)}/><br/>
			{componentesNC}
			<Link to="/registros"><button>Enviar</button></Link>
		</form>
		</div>
	);
}

export default Reporta;
