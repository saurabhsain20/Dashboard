import React from 'react'
import {Line} from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';


const useStyle = makeStyles({
    chartContainer: {
        display: 'flex',
        width: '620px',
        alignSelf: 'center'
    }
})

function Chart() {
    const classes = useStyle();
    const getUpdatedDate = (daysNo) => {
        const date = new Date();
        date.setDate(date.getDate() - daysNo)
        return date;
    }
    const addZero = number => number < 10 ? `0${number}` : number;

     const getDateWithSlash = dateStr => {
        const dateObj = new Date(dateStr);
        return !dateStr  ? null :  `${addZero(dateObj.getDate())}/${addZero(dateObj.getMonth() + 1)}/${dateObj.getFullYear()}`;
      };
    // console.log(getUpdatedDate(new Date(), 2));  
    const DATA = {
        labels: [getDateWithSlash(getUpdatedDate('2')), getDateWithSlash(getUpdatedDate('1')), getDateWithSlash(getUpdatedDate(0))],
        datasets: [{
            label: 'Sales today',
            data: [500, 600, 300]
        }]
    }
    return (
        <div className={classes.chartContainer}>
            <Line data={DATA} />
        </div>
    )
}

export default Chart
