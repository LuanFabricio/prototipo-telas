import {Link} from "react-router-dom";

function Home() {
	return (
		<center>		
		<ul>
			<li>
				<Link to="/reporta">Reporta</Link>
			</li>
			<li>
				<Link to="/cadastra">Cadastra</Link>
			</li>
			<li>
				<Link to="/relatorio">Relatorio</Link>
			</li>
			<li>
				<Link to="/login">Login</Link>
			</li>
			<li>
				<Link to="/registros">Registros</Link>
			</li>
		</ul>
		</center>
	);
}

export default Home;
