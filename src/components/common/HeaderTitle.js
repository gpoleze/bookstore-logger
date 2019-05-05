import React, {Component} from "react";
import {Typography} from "@material-ui/core";


export default class HeaderTitle extends Component {
    render() {
        return (
            <Typography className="header" component="h2" variant="h4" style={{paddingTop: 20}}>
                {this.props.title}
            </Typography>
        );
    }
}
