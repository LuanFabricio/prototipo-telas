import NaoConformidade from "../NaoConformidade";
import {useState} from 'react';

function RenderNC({}) {
	let ncs = ["nc1", "nc2"];
	const states = {};

	states["nc1"] = useState("");
	states["nc2"] = useState("");

	return (
		<ul>
		{
			ncs.map((nc_name, index) => (
				<NaoConformidade 
					key={index} 
					name={nc_name} 
					value={states[nc_name][0]} 
					setValue={states[nc_name][1]}/>
			))
		}
		</ul>
	);
}

export default RenderNC;
