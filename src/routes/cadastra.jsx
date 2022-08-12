import {useState} from "react";

function Cadastra() {
	let [input, setInput] = useState("");

	const submit = (event) => {
		event.preventDefault();
		let conformidades = localStorage.getItem("conformidades") || [];
		if (typeof conformidades == "string") {
			conformidades = conformidades.split(',');
		}
		conformidades.push(input);
		localStorage.setItem("conformidades", conformidades.toString());
		setInput("");
	}

	const change = (event) => {
		setInput(event.target.value);
	}

	return (
		<center>
			<form onSubmit={submit}>
				<label>Nova conformidade </label>
				<input value={input} onChange={change}/>
				<button>Enviar</button>
			</form>
		</center>
	);
}

export default Cadastra;
