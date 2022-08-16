import {Link} from "react-router-dom";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	"-webkit-transform": "translate(-50%, -50%)",
	transform: "translate(-50%, -50%)",
};

function Cadastra() {

	return (
		<div style={style}>
			<form>
				<div className="form-group">
					<label className="control-label">Nova conformidade </label>
					<input className="form-control"/>
				</div>
				<Link to="/registros">
					<button className="btn btn-primary btn-block">Cadastrar</button>
				</Link>
			</form>
			<br/>
			<form>
				<div className="form-group">
					<label className="control-label">Novo nome</label>
					<input className="form-control"/>
				</div>
				<select>
					<option value="">Selecione uma conformidade</option>
					<option value="nc1">Conformidade1</option>
				</select>
				<Link to="/registros">
					<button className="btn btn-primary btn-block">Atualizar</button>
				</Link>
			</form>
		</div>
	);
}

export default Cadastra;
