import React, { Component } from 'react';

class relogio extends Component {
    render() {

        return (
            <div>
                <relogio />
                <formulario />
            </div>
        )
    }
}

class CadastroRelogio extends React.Component {
    constructor(props) {
        super(props);
        this.handleSalvar = this.handleSalvar.bind(this);
    }

    handleSalvar(){


        fetch('http://127.0.0.1:8080/relogio', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id":"",
                "nome":"oi"
            })
        })
    }
    render(){
        return (
            <form id="relogio-form">
                <label>Relogio:</label>

                <button onClick={this.handleSalvar}>
                    Salvar
                </button>
            </form>
        )
    }
}

class ListaRelogio extends React.Component {
    render(){
        return (
            <table><tr><td>nada</td></tr></table>
        )
    }
}
export default relogio;