import React, { Component } from "react";

export default class Contador extends Component {
	state = {
		numero: this.props.numeroInicial
	};

	maisUm = () => {
		this.setState({ numero: this.state.numero + 1 });
	};

	menosUm = () => {
		this.setState({ numero: this.state.numero - 1 });
	};

	alterarNumero = diferenca => {
		this.setState({
			numero: this.state.numero + diferenca
		});
	};

	render() {
		return (
			<div>
				<div>Número: {this.state.numero}</div>
				<button onClick={this.maisUm}>Inc</button>
				<button onClick={this.menosUm}>Dec</button>
				{/* como alterarNumero recebe parametro, temos que usar arrow function */}
				<button onClick={() => this.alterarNumero(100)}>Inc 100</button>
				<button onClick={() => this.alterarNumero(-100)}>Dec 100</button>
			</div>
		);
	}
}
