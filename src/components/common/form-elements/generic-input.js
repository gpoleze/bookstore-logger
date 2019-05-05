import React from "react";
import GenericElement from "./generic-element";
import {FormControl, FormHelperText, Input, InputLabel, withStyles} from "@material-ui/core";

class GenericInput extends GenericElement {

    render() {
        const props = this.props;
        const state = this.state;
        return (
                <FormControl error={!!state.errorMessage} className={props.classes.formControl}>

                    <InputLabel htmlFor={props.id}>{props.label}</InputLabel>

                    <Input
                        id={props.id}
                        name={props.name}
                        value={props.value}
                        type={props.type}
                        onChange={props.onChange}
                        aria-describedby="component-error-text"
                    />

                    <FormHelperText className="component-error-text">{state.errorMessage}</FormHelperText>

                </FormControl>
        );
    }
}

export default withStyles(GenericInput.STYLES)(GenericInput);
