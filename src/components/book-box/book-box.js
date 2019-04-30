import React from "react";
import BookForm from "./book-form";

export default class BookBox extends React.Component {
    render() {
        return (
            <div id="book-box">
                <div className="header">
                    <h1>Books Log</h1>
                </div>
                <div className="content">
                    <div id="author-box">
                        <BookForm/>
                    </div>
                </div>
            </div>
        );
    }

}
