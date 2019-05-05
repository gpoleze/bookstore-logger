import React from "react";
import * as PubSub from "pubsub-js";

export default class GenericElement extends React.Component {
    static STYLES = theme => ({
        formControl: {
            margin: theme.spacing.unit,
            minWidth: 120,
            width: 100 + '%'
        },
        selectEmpty: {
            marginTop: theme.spacing.unit * 2,
        },
    });

    constructor() {
        super();
        this.state = {errorMessage: ''}
    }

    componentDidMount() {

        PubSub.subscribe("validation-error", (topic, error) => {
            if (error.field === this.props.name)
                this.setState({errorMessage: error.defaultMessage});
        });

        PubSub.subscribe("clean-errors", () => this.setState({errorMessage: ''}));
    }

}
