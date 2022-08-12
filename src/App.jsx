// import logo from './logo.svg';
import './App.css';

// import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reporta from "./routes/reporta.jsx";
import Cadastra from "./routes/cadastra.jsx";
import Home from './routes/home';
import Relatorio from "./routes/relatorio.jsx";

function App() {
	return (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/reporta" element={<Reporta/>}/>
			<Route path="/cadastra" element={<Cadastra/>}/>
			<Route path="/relatorio" element={<Relatorio/>}/>
		</Routes>
	</BrowserRouter>
	);
}

export default App;
