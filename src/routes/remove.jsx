import {Link} from "react-router-dom";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	"-webkit-transform": "translate(-50%, -50%)",
	transform: "translate(-50%, -50%)",
};

function Remove() {

	return (
		<div style={style}>
			<form>
				<div className="form-group">
					<label className="control-label">Não Conformidade</label>
					<select className="form-control">
						<option value="">Selecione uma conformidade</option>
						<option value="nc1">NãoConformidade1</option>
					</select>
				</div>
				<Link to="/registros">
					<button className="btn btn-primary btn-block">Remover</button>
				</Link>
			</form>
		</div>
	);
}

export default Remove;
