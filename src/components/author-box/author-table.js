import React, {Component} from 'react';

export default class AuthorTable extends Component {
    render() {
        return (
            <div>
                <table className="pure-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.authors.map(author =>
                            (
                                <tr key={author.id}>
                                    <td>{author.nome}</td>
                                    <td>{author.email}</td>
                                </tr>
                            ))
                    }
                    </tbody>
                </table>
            </div>
        );
    }

}
