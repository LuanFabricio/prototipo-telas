import {useState} from "react";

function Seletor({opcoes, titulo}) {
	const [value, setValue] = useState(opcoes.map(() => true));

	const changeIndexValue = (index) => {
		let newValue = Array.from(value);
		newValue[index] = !value[index];
		setValue(newValue);
	}

	console.log(value);

	return (
		<div className="col">
			<div>
				{titulo}
			</div>
			{
				opcoes.map((val, index) => {
					return (
						<div 
							key={index} 
							onClick={() => changeIndexValue(index)}>
						<input type="checkbox" checked={value[index]}
							onChange={() => changeIndexValue(index)}
							/>
						<label
							>{val}</label>
						</div>
					);
				})
			}
		</div>
	);
}

export default Seletor;
