import React from "react";
import GenericInput from "../common/generic-input";
import GenericSubmit from "../common/generic-submit";

export default class BookForm extends React.Component {

    constructor() {
        super();
        this.state = {titulo: '', preco: '', autorId: ''};

    }

    sendForm(event) {
        event.preventDefault();
        console.log(this.state);
        console.log("Form sent.");
    }

    render() {
        return (
            <div className="pure-form pure-form-aligned">

                <form className="pure-form pure-form-aligned" onSubmit={(event) => this.sendForm(event)}>
                    <GenericInput
                        type="text"
                        id="title"
                        label="Title"
                        name="titulo"
                        value={this.state.titulo}
                        onChange={(e) => this.setState({titulo: e.target.value})}
                    />
                    <GenericInput
                        type="number"
                        id="price"
                        label="Price"
                        name="preco"
                        value={this.state.preco}
                        onChange={(e) => this.setState({preco: e.target.value})}
                    />
                    <GenericInput
                        type="select"
                        id="title"
                        label="Title"
                        name="titulo"
                    />
                    <GenericSubmit text="Submit"/>
                </form>
            </div>
        );
    }
}
