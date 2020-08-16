import React from "react";
import PageHeader from "../../components/PageHeader";

import './style.css';

const TeacherForm = () => {
	return (
		<div>
			<div id="page-teacher-form" className="container">
				<PageHeader
					title="Que incrível que você quer dar aulas."
					description="O primeiro passo é preencher esses formulário de inscrição."
				/>
			</div>
		</div>
	);
}

export default TeacherForm;