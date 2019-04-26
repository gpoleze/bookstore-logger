import React, {Component} from 'react';
import $ from 'jquery';
import PubSub from 'pubsub-js'
import GenericInput from "../common/generic-input";
import GenericSubmit from "../common/generic-submit";

// const URL = 'https://cdc-react.herokuapp.com';
const URL = 'http://localhost:8080';
const API = URL + '/api';


export default class AuthorForm extends Component {
    constructor() {
        super();
        this.state = {nome: '', email: '', senha: ''};
    }

    sendForm(event) {
        event.preventDefault();

        const user = {nome: this.state.nome, email: this.state.email, senha: this.state.password};
        console.log(user);

        $.ajax({
            url: API + "/autores",
            contentType: 'application/json',
            dataType: 'json',
            type: 'post',
            data: JSON.stringify(user),
            success: res => PubSub.publish('update-authors-table', res),
            error: err => console.log(err)
        });
    }

    setNome(event) {
        this.setState({nome: event.target.value});
    }

    setEmail(event) {
        this.setState({email: event.target.value});
    }

    setPassword(event) {
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <div className="pure-form pure-form-aligned">

                <form className="pure-form pure-form-aligned" method="POST" onSubmit={this.sendForm.bind(this)}>

                    <GenericInput
                        id="name" name="name"
                        label="Name" type="text"
                        value={this.state.nome} onChange={e => this.setNome(e)}/>
                    <GenericInput
                        id="email" name="email"
                        label="Email" type="email"
                        value={this.state.email} onChange={e => this.setEmail(e)}/>
                    <GenericInput
                        id="password" name="password"
                        label="Password" type="password"
                        value={this.state.password} onChange={e => this.setPassword(e)}/>

                    <GenericSubmit text="Submit"/>

                </form>

            </div>
        );
    }

}
