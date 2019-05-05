import React from "react";
import {Paper, Table, TableHead, TableBody, TableRow, TableCell} from "@material-ui/core";

export default class BookTable extends React.Component {
    render() {
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Price</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            this.props.books.map(book =>
                               (
                                    <TableRow key={book.id}>
                                        <TableCell>{book.titulo}</TableCell>
                                        <TableCell>{book.preco}</TableCell>
                                    </TableRow>
                                )
                            )
                        }
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}
