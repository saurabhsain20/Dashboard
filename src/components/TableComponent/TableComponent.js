import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getFormattedDate } from '../../utilities/Utility';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
      maxHeight: 200,
    },
});
  
const RenderRow = (props) => {
    return props.keys.map((key, index) => {
        return <TableCell key={props.data[key]} scope="row" align="center">{props.data.hasOwnProperty('timeStamp') && key === 'timeStamp' ? getFormattedDate(props.data[key], 'DD MMM YYYY') : props.data[key] }</TableCell>
    })
}

function TableComponent(props) {
    const classes = useStyles();

    const getKeys = () => {
        return Object.keys(props.data[0]);
    }

    const getRowsData = () => {
        var items = props.data;
        var keys = getKeys();
        return items.map((row, index) => {
            return (
                <TableRow key={index}>
                    <RenderRow key={index} data={row} keys={keys} />
                </TableRow>
            )
        })
    }    

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {getKeys().map((header) => (
                                <TableCell key={header} align="center">{header.toUpperCase()}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {getRowsData()}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default TableComponent;
