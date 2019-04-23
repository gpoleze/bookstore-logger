import React, {Component} from 'react'

export default class GenericSubmit extends Component {
    render() {
        return (
            <div className="pure-control-group">
                <button type="submit" className="pure-button pure-button-primary">{this.props.text}</button>
            </div>
        );
    }
}
