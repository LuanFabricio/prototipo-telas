import {useState} from "react";
import {Link} from "react-router-dom";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	"-webkit-transform": "translate(-50%, -50%)",
	transform: "translate(-50%, -50%)",
};

function Login() {
	const [usuario, setUsuario] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div style={style}>
		<form>
			<div className="form-group">
				<label className="control-label">Usuario</label>
				<input className="form-control" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
			</div>
			<div className="form-group">
				<label className="control-label">Senha</label>
				<input 
					className="form-control" 
					type="password"
					value={password} 
					onChange={(e) => setPassword(e.target.value)}/>
			</div>
			<Link to="/registros">
				<button className="btn btn-primary btn-lg btn-block">Entrar</button>
			</Link>
		</form>
		</div>
	);
}

export default Login;
