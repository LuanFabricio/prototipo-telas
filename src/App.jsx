// import logo from "./logo.svg";
import "./App.css";

// import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reporta from "./routes/reporta.jsx";
import Cadastra from "./routes/cadastra.jsx";
import Home from "./routes/home";
import Relatorio from "./routes/relatorio.jsx";
import Login from "./routes/login.jsx";
import Registros from "./routes/registros";
import Remove from "./routes/remove.jsx";

function App() {
	return (
	<div>
		<link 
		rel="stylesheet" 
		href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
		integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
		crossOrigin="anonymous"/>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login/>}/>
				<Route path="/reporta" element={<Reporta/>}/>
				<Route path="/cadastra_nc" element={<Cadastra/>}/>
				<Route path="/remove_nc" element={<Remove/>}/>
				<Route path="/relatorio" element={<Relatorio/>}/>
				<Route path="/registros" element={<Registros/>}/>
			</Routes>
		</BrowserRouter>
	</div>
	);
}

export default App;
