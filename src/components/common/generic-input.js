import React, {Component} from "react";
import * as PubSub from "pubsub-js";


export default class GenericInput extends Component {
    constructor() {
        super();
        this.state = {errorMessage: ''}
    }

    componentDidMount() {

        PubSub.subscribe("validation-error", (topic, error) => {
            console.log(error.field);
            console.log(this.props.name);
            if (error.field === this.props.name)
                this.setState({errorMessage: error.defaultMessage});
        });

        PubSub.subscribe("clean-errors", () => this.setState({errorMessage: ''}));
    }

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
