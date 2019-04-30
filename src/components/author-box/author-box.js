import React, {Component} from 'react';
import AuthorForm from "./author-form";
import AuthorTable from "./author-table";
import $ from "jquery";
import PubSub from "pubsub-js";

// const URL = 'https://cdc-react.herokuapp.com';
const URL = 'http://localhost:8080';

export default class AuthorBox extends Component {

    constructor() {
        super();
        this.state = {authors: []};
    }

    componentDidMount() {

        $.getJSON(
            URL + '/api/autores',
            res => this.setState({authors: res})
        );

        PubSub.subscribe(
            'update-authors-table',
            (topic, newAuthorsList) => this.setState({authors: newAuthorsList})
        );
    }

    render() {
        return (
            <div>
                <div className="header">
                    <h1>Author Log</h1>
                </div>
                <div className="content">
                    <div id="author-box">
                        <AuthorForm/>
                        <AuthorTable authors={this.state.authors}/>
                    </div>
                </div>
            </div>
        );
    }
}
