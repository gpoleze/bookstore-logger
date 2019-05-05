import React from "react";
import PubSub from "pubsub-js";
import GenericInput from "../common/form-elements/generic-input";
import GenericSubmit from "../common/form-elements/generic-submit";
import GenericSelect from "../common/form-elements/generic-select";
import {apiGet, apiPost} from "../core/api-handler";
import {ErrorHandler} from "../core/error-handler";

export default class BookForm extends React.Component {

    constructor() {
        super();
        this.state = {titulo: '', preco: '', autorId: '', authors: []};
    }

    sendForm(event) {
        event.preventDefault();

        PubSub.publish("clean-errors", {});

        apiPost(
            '/livros',
            {titulo: this.state.titulo, preco: this.state.preco, autorId: this.state.autorId}
        )
            .then(books => {
                if (books) {
                    console.log('BookForm.sendForm: ', books);
                    PubSub.publish('update-books-table', books);
                    this.setState({titulo: '', preco: '', autorId: ''})
                }
            })
            .catch(err => ErrorHandler.publishErrors(err.responseJSON));

    }

    componentDidMount() {

        apiGet("/autores").then(response =>
            this.setState({
                authors: response.sort(
                    (a, b) => {
                        if (a.nome.toLowerCase() > b.nome.toLowerCase()) return 1;
                        if (a.nome.toLowerCase() < b.nome.toLowerCase()) return -1;
                        return 0;
                    }
                )
            }));
    }

    render() {
        return (
            <div className="pure-form pure-form-aligned">

                <form className="pure-form pure-form-aligned" onSubmit={e=>this.sendForm(e)}>
                    <GenericInput
                        type="text"
                        id="title"
                        label="Title"
                        name="titulo"
                        value={this.state.titulo}
                        onChange={e => this.setState({titulo: e.target.value})}
                    />
                    <GenericInput
                        type="number"
                        id="price"
                        label="Price"
                        name="preco"
                        value={this.state.preco}
                        onChange={e => this.setState({preco: e.target.value})}
                    />
                    <GenericSelect
                        id="authorId"
                        name="autorId"
                        label="Select Author"
                        value={this.state.autorId}
                        handleChange={e => this.setState({autorId: e.target.value})}
                        stateName="autorId"
                        options={this.state.authors}
                    />
                    <GenericSubmit text="Submit"/>
                </form>
            </div>
        );
    }
}
