import React, {useState} from "react";

function GradeExam(props) {
	const {professor} = props;

	const [grade, setGrade] = useState({
		name: "",
		from: "",
		student: "",
		grade: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="grade-exam">
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Ime predmeta</label>
				<input
					name="name"
					type="text"
				/>
				<label htmlFor="student">Broj indexa studenta</label>
				<input
					name="student"
					type="text"
				/>
				<label htmlFor="grade">Ocjena</label>
				<input
					name="grade"
					type="text"
				/>
				<button type="submit">Ocijeni</button>
			</form>
		</div>
	);
}

export default GradeExam;
