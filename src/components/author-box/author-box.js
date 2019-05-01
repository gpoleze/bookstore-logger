import React, {Component} from 'react';
import $ from "jquery";
import PubSub from "pubsub-js";
import AuthorTable from "./author-table";
import AuthorForm from "./author-form";
import {apiGet} from "../core/api-handler";

export default class AuthorBox extends Component {

    constructor() {
        super();
        this.state = {authors: []};
    }

    componentDidMount() {

        apiGet('/autores')
            .then(res => this.setState({authors: res}));

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
