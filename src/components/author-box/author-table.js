import React, {Component} from 'react';
import {Paper, Table, TableHead, TableBody, TableRow, TableCell} from "@material-ui/core";

export default class AuthorTable extends Component {
    render() {
        return (
            <Paper>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        this.props.authors.map(author =>
                            (
                                <TableRow key={author.id}>
                                    <TableCell>{author.nome}</TableCell>
                                    <TableCell>{author.email}</TableCell>
                                </TableRow>
                            ))
                    }
                    </TableBody>
                </Table>
            </Paper>
        );
    }

}
