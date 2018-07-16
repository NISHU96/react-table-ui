import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    Button,
    TextField,
    Switch
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import TableRows from './tablerow';
import Typography from '@material-ui/core/Typography';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
const THEME = createMuiTheme({
    typography: {
        "font-family": "'Roboto', 'sans-serif'",
        "fontSize": 18
    }
});

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto'
    },
    table: {
        minWidth: 700
    }
});

const SimpleTable = (props) => {
    return (
        <MuiThemeProvider theme={THEME}>
            <Paper className={props.classes.root}>
                <Table className={props.classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell numeric>
                                <Button
                                    variant="fab"
                                    mini
                                    color="primary"
                                    aria-label="add"
                                    className={props.classes.button}>
                                    <AddIcon onClick={props.handleAddButton}/>
                                </Button>
                            </TableCell>
                            <TableCell >
                                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <TextField
                                        required
                                        label="HEAD 1"
                                        id="name"
                                        className={props.classes.textField}
                                        value={props.state.inputvalue1}
                                        onChange={props.onchangeone}
                                        margin="none"/>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <TextField
                                        required
                                        label="HEAD 2"
                                        id="name"
                                        className={props.classes.textField}
                                        value={props.state.inputvalue2}
                                        onChange={props.onchangetwo}
                                        margin="none"/>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <h2>MULTI</h2>
                                    <Switch
                                        checked={props.state.isChecked}
                                        onChange={props.handleSwitchChange('isChecked')}
                                        value="isChecked" />
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props
                            .state
                            .data
                            .map((array, index) => <TableRows
                                key={array[0]}
                                id={array[0]}
                                array={array}
                                handleDelete={props.handleDelete}/>)
}
                    </TableBody>
                </Table>

            </Paper>
            <Typography align="center">
                <Button
                    style={{
                    marginTop: '30px'
                }}
                    size="small"
                    disabled={props.state.data.length > 0 ? false : true}
                    color="primary"
                    variant="contained"
                    className={props.classes.button}
                    onClick={props.handleSubmitButton}
                    >
                    SUBMIT
                </Button>
            </Typography>
        </MuiThemeProvider>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
    handleAddButton: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default withStyles(styles)(SimpleTable);