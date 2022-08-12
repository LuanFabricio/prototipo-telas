import PropTypes from "prop-types";

function IdMedico({id, setId}) {
	// console.log(id, "|", setId);

	const updateId = (e) => { 
		setId(e.target.value);
	}

	return (
		<>
		<label>Id do médico</label><br/>
		<input id="medico" value={id} onChange={updateId}/>
		</>
	);
}

IdMedico.propTypes = {
	id: PropTypes.string.isRequired,
	setId: PropTypes.func.isRequired,
}

export default IdMedico;
