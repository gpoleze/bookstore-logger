import React from "react";
import GenericElement from "./generic-element";


export default class GenericInput extends GenericElement {
    render() {
        return (
            <div className="pure-control-group">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input id={this.props.id} type={this.props.type} name={this.props.name} value={this.props.value}
                       onChange={this.props.onChange}/>
                <span className="error">{this.state.errorMessage}</span>
            </div>
        );
    }
}
