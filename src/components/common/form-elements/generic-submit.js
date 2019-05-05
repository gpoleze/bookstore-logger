import React, {Component} from 'react'
import {Button, withStyles} from "@material-ui/core";
import PropTypes from 'prop-types';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});


class GenericSubmit extends Component {
    render() {
        return (
            <div className={this.props.classes.container}>
                <Button variant="contained" size="large" color="primary" className={this.props.classes.margin}>
                    {this.props.text}
                </Button>
            </div>
        );
    }
}

export default withStyles(styles)(GenericSubmit);
