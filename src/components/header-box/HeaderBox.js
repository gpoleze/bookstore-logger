import React from 'react'
import {Link, withRouter} from "react-router-dom";
import {createStyles, withStyles, IconButton, Menu, MenuItem} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import LinkItem from "./LinkItem";

const styles = createStyles({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    link: {
        textDecoration: 'none'
    }
});

class HeaderBox extends React.Component {
    state = {anchorEl: null};

    handleClick = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = (e) => {
        this.setState({anchorEl: null});
    };

    render() {
        const {anchorEl} = this.state;
        const classes = this.props.classes;
        return (
            <div>
                <div onClick={this.handleClick}>
                    <IconButton
                        className={this.props.classes.menuButton}
                        color="inherit"
                        aria-label="Menu"
                        aria-haspopup="true"
                    >
                        <MenuIcon/>
                    </IconButton>
                </div>

                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >

                    <LinkItem path={'/'} label={'Home'} eventHandler={this.handleClose}/>
                    <LinkItem path={'/author'} label={'Authors'} eventHandler={this.handleClose}/>
                    <LinkItem path={'/book'} label={'Books'} eventHandler={this.handleClose}/>

                </Menu>

            </div>
        );
    }
}

export default withStyles(styles)(HeaderBox);
