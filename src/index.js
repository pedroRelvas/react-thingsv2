import React from "react";
import ReactDOM from "react-dom";
import PrimeiroComponente from "./components/PrimeiroComponente";
//deconstrução
import { CompA, CompB as B } from "./components/DoisComponentes";
import MultiElementos from "./components/MultiElementos";
import App from "./App";
import FamiliaSilva from "./components/FamiliaSilva";
import Membro from "./components/Membro";
import Familia from "./components/Familia";
import ComponenteComFuncao from "./components/ComponenteComFuncao";
import Pai from "./components/Pai";
import ComponenteClasse from "./components/ComponenteClass";
import Contador from "./components/Contador";
const rootElement = document.getElementById("root");
ReactDOM.render(
	<React.StrictMode>
		<Contador numeroInicial={0} />
		<ComponenteClasse valor="Sou um componente de classe." />
		<Pai />
		<ComponenteComFuncao />
		<Familia sobrenome="Teixeira">
			<Membro nome="Rui" />
			<Membro nome="Ana" />
			{/* <Membro nome="Rui" sobrenome="Andrade" /> */}
		</Familia>

		{/* isto é comunicação directa */}
		{/* <FamiliaSilva sobrenome="Silva" /> */}
		{/* 
    <App />
    <MultiElementos />
		<PrimeiroComponente valor="Bom dia!" aBcD={Math.pow(2, 8)} />
		<CompA valor="Olá eu sou A!" />
		<B valor="Olá eu sou b!" /> */}
	</React.StrictMode>,
	rootElement
);
