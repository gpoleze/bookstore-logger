import React, {Component} from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core";

import createStyles from "@material-ui/core/es/styles/createStyles";
import MenuItems from "./components/header-box/HeaderBox";

const styles = createStyles({
    root: {
        flexGrow: 1,
    },
});

class App extends Component {

    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <MenuItems/>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Book Logger
                        </Typography>
                    </Toolbar>
                </AppBar>

                <div id='main'>
                    {this.props.children}
                </div>

            </div>

        );
    }

}

export default withStyles(styles)(App);
