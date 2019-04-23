import React, {Component} from 'react';
import AuthorForm from "./author-form";
import AuthorTable from "./author-table";
import $ from "jquery";

const URL = 'https://cdc-react.herokuapp.com';

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
    }

    render() {
        return (
            <div id="author-box">
                <AuthorForm updateCallback={newAuthorsList => this.setState({authors: newAuthorsList})}/>
                <AuthorTable authors={this.state.authors}/>
            </div>
        );
    }
}
