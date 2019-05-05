import React, {Component} from 'react';
import PubSub from "pubsub-js";
import AuthorTable from "./author-table";
import AuthorForm from "./author-form";
import {apiGet} from "../core/api-handler";
import HeaderTitle from "../common/HeaderTitle";

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
                <HeaderTitle title="Author Log"/>

                <div id="author-box">
                    <AuthorForm/>
                    <AuthorTable authors={this.state.authors}/>
                </div>
            </div>
        );
    }
}
