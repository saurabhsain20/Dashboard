import React from 'react'
import CardComponent from '../Card/CardComponent';
import { makeStyles } from '@material-ui/core/styles';
import Chart from '../Chart/Chart';
import TableComponent from '../TableComponent/TableComponent';
import {tableArray} from '../../data/data';
import { getTodaysData, currentWeekData, currentMonthData, lasthMonthData } from '../../utilities/Utility';

const useStyle = makeStyles({
    rootContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        // overflow: "scroll",
        width: "100%",
    },
    cardContainer: {
        display: 'flex',
        flex: 1
    },
    chartContainer: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        
    },
    tableContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        // width: '70%',
        alignItems: 'center'
        
    },
    text: {
        fontSize: '20px',
        textAlign: 'center',
    }

})

const DATA = [
    {
        id: 1,
        firstTitle: `Todays's Order`,
        firstValue: 300,
        secondTitle: `Current Week Order`,
        secondValue: 1300
    },
    {
        id: 2,
        firstTitle: `Today's Order amount`,
        firstValue: 20000,
        secondTitle: `Current Week amount`,
        secondValue: 45000
    },
    {
        id: 3,
        firstTitle: `MTD Order`,
        firstValue: 400,
        secondTitle: `Last Month Order`,
        secondValue: 1300
    },
    {
        id: 4,
        firstTitle: `MTD Order amount`,
        firstValue: 300,
        secondTitle: `Last Month amount`,
        secondValue: 1300
    },
]


function compare(a, b) {
    let comparison = 0;
    if (a.amount < b.amount) {
      comparison = 1;
    } else if (a.amount > b.amount) {
      comparison = -1;
    }
    return comparison;
}

function Home() {
    const classes = useStyle();
    
    const getSortedTables = (arr) => {
        let sortedArray =  arr.sort(compare);
        return sortedArray;
    }

    const getTopFive = (data) => {
        const arr = getSortedTables(data);
        return arr.slice(0,5)
    }

    const getBottomFive = (data) => {
        const arr = getSortedTables(data);
        if(arr && arr.length > 0 && arr.length > 5) {
           return arr.slice(arr.length - 5, arr.length);
        }
    }

    const getTodaysOrderTotal = () => {
        let sum = 0;
        getTodaysData(tableArray).map(elem => {
            return sum += elem.amount;
        })
        return sum;
    }

    const getCurrentWeekTotal = () => {
        let sum = 0;
        currentWeekData(tableArray).map(elem => {
            return sum += elem.amount
        })
        return sum;
    }

    const getCurrentMonthTotal = () => {
        let sum = 0;
        currentMonthData(tableArray).map(elem => {
            return sum += elem.amount
        })
        return sum;
    }

    const getLastMonthTotal = () => {
        let sum = 0;
        lasthMonthData(tableArray).map(elem => {
            return sum += elem.amount
        })
        return sum;
    }

    const userData = (data) => {
        let newUserData = [];
        data.forEach(elem => {
            newUserData.push({
                name: elem.name,
                amount: elem.amount,
                quantity: elem.quantity,
                city: elem.city,
            })
        })
        return newUserData;
    }


    const orderData = (data) => {
        let newOrderData = [];
        data.forEach(elem => {
            newOrderData.push({
                id: elem.id,
                amount: elem.amount,
                quantity: elem.quantity,
                name: elem.name,
            })
        })
        return newOrderData;
        }

    return (
        <div className={classes.rootContainer}>
        <div className={classes.cardContainer}>
            <CardComponent
                firstTitle = {`Today's Order`}
                firstValue = {getTodaysData(tableArray).length}
                secondTitle = {'Curret Week Orders'}
                secondValue = {currentWeekData(tableArray).length}
                width = {`${100/DATA.length}%`}
            />
            <CardComponent
                firstTitle = {`Today's Order amount`}
                firstValue = {getTodaysOrderTotal()}
                secondTitle = {'Current Week amount'}
                secondValue = {getCurrentWeekTotal()}
                width = {`${100/DATA.length}%`}
            />
            <CardComponent
                firstTitle = {`MTD Order`}
                firstValue = {currentMonthData(tableArray).length}
                secondTitle = {'Last Month Order'}
                secondValue = {lasthMonthData(tableArray).length}
                width = {`${100/DATA.length}%`}
            />
            <CardComponent
                firstTitle = {`MTD Order amount`}
                firstValue = {getCurrentMonthTotal()}
                secondTitle = {'Last Month amount'}
                secondValue = {getLastMonthTotal()}
                width = {`${100/DATA.length}%`}
            />
        </div>
        <Chart />
        <div className={classes.tableContainer}>
            <h1 className={classes.text}>Top Five Order Table</h1>
            <TableComponent data={getTopFive(orderData(tableArray))}/>
        </div>
        <div className={classes.tableContainer}>
            <h1 className={classes.text}>Bottom Five Order Table</h1>
            <TableComponent data={getBottomFive(orderData(tableArray))}/>
        </div>
        <div className={classes.tableContainer}>
            <h1 className={classes.text}>Bottom Five Order Table</h1>
            <TableComponent data={getTopFive(userData(tableArray))}/>
        </div>
        <div className={classes.tableContainer}>
            <h1 className={classes.text}>Bottom Five Order Table</h1>
            <TableComponent data={getBottomFive(userData(tableArray))}/>
        </div>
        </div>
    )
}

export default Home;
