import React from "react";
import BookForm from "./book-form";
import BookTable from "./book-table";
import {apiGet} from "../core/api-handler";
import * as PubSub from "pubsub-js";


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
                <div className="header">
                    <h1>Books Log</h1>
                </div>
                <div className="content">
                    <div id="author-box">
                        <BookForm/>
                        <BookTable books={this.state.books}/>
                    </div>
                </div>
            </div>
        );
    }

}
