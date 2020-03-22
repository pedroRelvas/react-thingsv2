import React from "react";
import { filhosComProps } from "../utils/utils";

export default props => (
	<div>
		<h1>Familia</h1>
		{/* A função map só vai dar neste contexto da seguinte forma: */}
		{/*  Para passar propriadades para TODOS os filhos */}
		{/* {React.Children.map(props.children, filho => {
			return React.cloneElement(filho, { ...props });
		})} */}

		{/* Ver utils */}
		{filhosComProps(props)}
		{/* propagacao direta sem ser hardcoded, mas só dá para um filho */}

		{/*	{React.cloneElement(props.children, {
			sobrenome:  props.sobrenome  props  { ...props }
		})} 
    */}
	</div>
);
