import React from "react";
import BookForm from "./book-form";
import BookTable from "./book-table";
import {apiGet} from "../core/api-handler";
import * as PubSub from "pubsub-js";
import HeaderTitle from "../common/HeaderTitle";


export default class BookBox extends React.Component {

    constructor() {
        super();
        this.state = {books: [{id: '', titulo: '', preco: ''}]};
    }

    componentDidMount() {
        apiGet('/livros')
            .then(books => this.setState({books: books}))
            .catch(err => console.log(err));

        PubSub.subscribe('update-books-table', (topic, newBooksList) => this.setState({books: newBooksList}));
    }

    render() {
        return (
            <div id="book-box">
                <HeaderTitle title="Book Log"/>

                <div id="author-box">
                    <BookForm/>
                    <BookTable books={this.state.books}/>
                </div>
            </div>
        );
    }

}
