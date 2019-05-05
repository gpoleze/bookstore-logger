import React, {Component} from 'react';
import PubSub from "pubsub-js";
import AuthorTable from "./author-table";
import AuthorForm from "./author-form";
import {apiGet} from "../core/api-handler";
import HeaderTitle from "../common/HeaderTitle";
import Divider from "@material-ui/core/Divider";

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
                    <Divider style={{margin:20}}/>
                    <AuthorTable authors={this.state.authors}/>
                </div>
            </div>
        );
    }
}
