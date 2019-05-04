import {MenuItem, withStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import React from "react";

const style = {
    link: {textDecoration: 'none'}
};

class LinkItem extends React.Component {
    render() {
        return (
            <Link to={this.props.path} className={this.props.classes.link} onClick={this.props.eventHandler}>
                <MenuItem>
                    {this.props.label}
                </MenuItem>
            </Link>
        );
    }

}

export default withStyles(style)(LinkItem)
