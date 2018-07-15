import React from 'react';
import {TableRow, TableCell, Button, Grow} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const THEME = createMuiTheme({
    typography: {
     "font-family": "'Roboto', 'sans-serif'",
     "fontSize": 18,
    }
 });


const TableRows = (props) => {
    return (
        
        <MuiThemeProvider theme={THEME}>
        <TableRow>
            <TableCell numeric>
                <Button variant="fab" mini aria-label="delete">
                    <DeleteIcon
                        onClick={props
                        .handleDelete
                        .bind(this, props.id)}/>
                </Button>
            </TableCell>
            <TableCell numeric>
                <Typography align='center'>
                    {props.array[0]}
                </Typography>
            </TableCell>
            <TableCell numeric>
                <Typography align='center'>
                    {props.array[1]}
                </Typography>
            </TableCell>
            <TableCell numeric>
                <Typography align='center'>
                    {props.array[2]
                        ? 'FLAGGED'
                        : 'NOT FLAGGED'}
                </Typography>
            </TableCell>
        </TableRow>
        </MuiThemeProvider>
        
    )
};

export default TableRows;
