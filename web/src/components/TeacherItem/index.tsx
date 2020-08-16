import React from "react";

import './style.css';

import iconWhatsApp from "../../assets/images/icons/whatsapp.svg";

interface TeacherItemProps {
	photoPath: string;
	photoAlt: string;
	teacherName: String;
	subject: String;
	resume: String;
	presentation: String;
	price: Number;
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
	return (
		<article className="teacher-item">
			<header>
				<img src={props.photoPath} alt={props.photoAlt} />
				<div>
					<strong>{props.teacherName}</strong>
					<span>{props.subject}</span>
				</div>
			</header>
			<p>
				{props.presentation}
				<br /><br />
				{props.resume}
			</p>
			<footer>
				<p>
					Preço/hora
                    <strong>R$ {props.price}</strong>
				</p>
				<button type="button">
					<img src={iconWhatsApp} alt="Ícone do whatsapp" />
                    Entrar em contato
                    </button>
			</footer>
		</article>
	);
}

export default TeacherItem;