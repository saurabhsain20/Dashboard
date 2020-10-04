import React from 'react'
import {Line} from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import { getDataForChart, getDateForChart } from '../../utilities/Utility';
import { tableArray } from '../../data/data';


const useStyle = makeStyles({
    chartContainer: {
        display: 'flex',
        width: '800px',
        alignSelf: 'center'
    }
})

function Chart() {
    const classes = useStyle();
    const DATA = {
        labels: getDateForChart(tableArray),
        datasets: [{
            label: 'Sales today',
            data: getDataForChart(tableArray)
        }]
    }
    return (
        <div className={classes.chartContainer}>
            <Line data={DATA} />
        </div>
    )
}

export default Chart
