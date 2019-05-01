import React from "react";
import GenericElement from "./generic-element";

export default class GenericSelect extends GenericElement {

    render() {
        return (
            <div className="pure-control-group">
                <select value={this.props.autorId} name={this.props.name} onChange={this.props.actionFunction}>
                    <option value="">Select</option>
                    {
                        this.props.options.map((option) => {
                            return <option key={option.id} value={option.id}>
                                {option.nome}
                            </option>;
                        })
                    }
                </select>
                <span className="error">{this.state.errorMessage}</span>
            </div>
        );
    }
}
