// import PropTypes from "prop-types";
import {useState} from "react";

function NaoConformidade() {
	const [formulario, setFormulario] = useState("");
	const [dataFormulario, setDataFormulario] = useState("");
	const [naoConformidade, setNaoConformidade] = useState("");
	const [profissional, setProfissional] = useState("");
	const [setorNaoConformidade, setSetorNaoConformidade] = useState("");

	return (
		<div id="" className="reporta-form">
			<label>Formulário</label>
			<select 
				id=""
				value={formulario}
				onChange={(e) => setFormulario(e.target.value)}
				>
				<option value="">Escolha uma opção</option>
			</select><br/>

			<label>Data do formulario</label>
			<input 
				id="data_formulario" 
				type="date"
				value={dataFormulario}
				onChange={(e) => setDataFormulario(e.target.value)}
				/><br/>

			<label>Não conformidade</label>
			<select 
				id="nao_conformidade"
				value={naoConformidade}
				onChange={(e) => setNaoConformidade(e.target.value)}
				>
				<option value="">Escolha uma opção</option>
				<option value="outro">Outro</option>
			</select><br/>

			<label>Profissional</label>
			<select 
				id="profissional"
				value={profissional}
				onChange={(e) => setProfissional(e.target.value)}
				>
				<option value="">Escolha uma opção</option>
				<option value="outro">Outro</option>
			</select><br/>

			<label>Setor</label>
			<select 
				id="setor_nao_conformidade"
				value={setorNaoConformidade}
				onChange={(e) => setSetorNaoConformidade(e.target.value)}
				>
				<option value="">Escolha uma opção</option>
				<option value="outro">Outro</option>
			</select><br/>
		</div>
	);
}

export default NaoConformidade;
