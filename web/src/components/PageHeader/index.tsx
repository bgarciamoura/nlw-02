import React from "react";
import { Link } from "react-router-dom";

import backIcon from "../../assets/images/icons/back.svg";
import logo from "../../assets/images/logo.svg";

import './style.css';

interface PageHeaderProps {
	title?: string;
	description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
	return (
		<header className="page-header">
			<div className="top-bar-container">
				<Link to="/">
					<img src={backIcon} alt="Seta indicando voltar." />
				</Link>
				<img src={logo} alt="Proffy logo" />
			</div>
			<div className="header-content">
				<strong>{props.title}</strong>
				{/* IF QUE NÃO EXISTE ELSE */}
				{props.description && <p>{props.description}</p>}
				{props.children}
			</div>
		</header>
	);
}

export default PageHeader;