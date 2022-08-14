import { useState } from "react";

function Documento() {
	const [documento, setDocumento] = useState("");
	const [prontuario, setProntuario] = useState("");
	const [inicioInternacao, setInicioInternacao] = useState("");
	const [fimInternacao, setFimInternacao] = useState("");

	return (
		<div id="documento" className="reporta-form">
			<label>Tipo do documento</label>
			<select 
				id="tipo_documento"
				value={documento}
				onChange={(e) => setDocumento(e.target.value)}
				>
				<option value="">Escolha uma opção</option>
				<option value="outro">Outro</option>
			</select><br/>

			<label>Nr. do prontuário</label>
			<input 
				id="numero_protuario" 
				type="text"
				value={prontuario}
				onChange={(e) => setProntuario(e.target.value)}
				/><br/>
		
			<label>Data de internação</label>
			<input 
				id="inicio_internacao" 
				type="date"
				value={inicioInternacao}
				max={fimInternacao}
				onChange={(e) => setInicioInternacao(e.target.value)}
				/> 
			<label>a</label>
			<input 
				id="fim_internacao" 
				type="date"
				value={fimInternacao}
				min={inicioInternacao}
				onChange={(e) => setFimInternacao(e.target.value)}
				/>
		</div>
	);
}

export default Documento;
