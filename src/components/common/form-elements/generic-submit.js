import React, {Component} from 'react'
import {Button, withStyles} from "@material-ui/core";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    }
});


class GenericSubmit extends Component {
    render() {
        return (
            <Button variant="contained" color="primary" className={this.props.classes.formControl} type="submit">
                {this.props.text}
            </Button>
        );
    }
}

export default withStyles(styles)(GenericSubmit);
