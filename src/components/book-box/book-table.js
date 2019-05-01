import React from "react";

export default class BookTable extends React.Component {
    render() {
        return (
            <div>
                <table className="pure-table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.books.map(book =>
                            (
                                <tr key={book.id}>
                                    <td>{book.titulo}</td>
                                    <td>{book.preco}</td>
                                </tr>
                            ))
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}
