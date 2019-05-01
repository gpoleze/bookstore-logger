import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import GenericInput from "../common/form-elements/generic-input";
import GenericSubmit from "../common/form-elements/generic-submit";
import {apiPost} from "../core/api-handler";

export default class AuthorForm extends Component {
    constructor() {
        super();
        this.state = {nome: '', email: '', senha: ''};
    }

    sendForm(event) {
        event.preventDefault();

        const user = {nome: this.state.nome, email: this.state.email, senha: this.state.senha};

        PubSub.publish("clean-errors", {});

        apiPost('/autores', user)
            .then(res => {
                    if (res) {
                        PubSub.publish('update-authors-table', res);
                        this.setState({nome: '', email: '', senha: ''});
                    }
                }
            );
    }

    setNome(event) {
        this.setState({nome: event.target.value});
    }

    setEmail(event) {
        this.setState({email: event.target.value});
    }

    setPassword(event) {
        this.setState({senha: event.target.value});
    }

    render() {
        return (
            <div className="pure-form pure-form-aligned">

                <form className="pure-form pure-form-aligned" method="POST" onSubmit={this.sendForm.bind(this)}>

                    <GenericInput
                        id="name" name="nome"
                        label="Name" type="text"
                        value={this.state.nome} onChange={e => this.setNome(e)}/>
                    <GenericInput
                        id="email" name="email"
                        label="Email" type="email"
                        value={this.state.email} onChange={e => this.setEmail(e)}/>
                    <GenericInput
                        id="password" name="senha"
                        label="Password" type="password"
                        value={this.state.senha} onChange={e => this.setPassword(e)}/>

                    <GenericSubmit text="Submit"/>

                </form>

            </div>
        );
    }

}
