import {useState} from "react";

function Auditor() {
	const [auditor, setAuditor] = useState("");
	const [setor, setSetor] = useState("");
	
	let current_date = new Date(new Date().toLocaleDateString()).toISOString().split("T")[0];
	
	return (
		<div id="auditor">
			<label>Auditor</label>
			<select 
				id="auditor" 
				value={auditor}
				onChange={(e) => setAuditor(e.target.value)}>
				<option value="">Escolha uma opção</option>
				<option value="outro">Outro</option>
			</select><br/>

			<label>Setor</label>
			<select 
				id="setor" 
				value={setor} 
				onChange={(e) => setSetor(e.target.value)}>
				<option value="">Escolha uma opção</option>
				<option value="outro">Outro</option>
			</select><br/>

			<label>Data da análise</label>
			<input 
				id="data-analise" 
				type="date" 
				readOnly={true}
				value={current_date}/>
		</div>
	)
}

export default Auditor;
