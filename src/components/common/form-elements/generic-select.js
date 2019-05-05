import React from "react";
import GenericElement from "./generic-element";
import {MenuItem, TextField, withStyles} from "@material-ui/core";

class GenericSelect extends GenericElement {
    state = {autorId: ''};

    handleChange = e => {
        this.props.handleChange(e);
        this.setState({[this.props.stateName]: e.target.value});
    };

    constructor() {
        super();
        console.log("GenericSelect: ", this.state);
    }

    render() {
        const props = this.props;
        const classes = props.classes;

        return (
            <div>
                <TextField
                    select
                    label={props.label}
                    className={classes.formControl}
                    value={this.state.autorId}
                    name={this.props.name}
                    onChange={this.handleChange}
                    margin="normal"
                    error={!!this.state.errorMessage}
                    helperText={this.state.errorMessage}
                >
                    <MenuItem value='' disabled className={classes.selectEmpty}>Select Author</MenuItem>
                    {this.props.options.map(option => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.nome}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        );
    }
}

export default withStyles(GenericElement.STYLES)(GenericSelect)
