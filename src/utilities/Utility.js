import moment from 'moment';

export const getTodaysData = (data) => {
    let todaysData = [];
    data.forEach(element => {
        isSameDateAs(element.timeStamp) && todaysData.push(element);
    });
    return todaysData;
}

const isSameDateAs = (pDate) => {
    const today = new Date();
    const anotherDate = new Date(pDate);
    return today.getFullYear() === anotherDate.getFullYear() &&
      today.getMonth() === anotherDate.getMonth() &&
      today.getDate() === anotherDate.getDate()
    ;
}

export const currentWeekData = (data) => {
    var now = moment();
    let currentWeekData = [];
    data.forEach(element => {
        const input = moment(element.timeStamp);
        now.isoWeek() === input.isoWeek() && currentWeekData.push(element);
    });
    return currentWeekData;
}

export const currentMonthData = (data) => {
    var now = moment();
    let currentMonthData = [];
    data.forEach(element => {
        const input = moment(element.timeStamp);
        now.month() === input.month() && currentMonthData.push(element)
    });
    return currentMonthData;
}

export const lasthMonthData = (data) => {
    var now = moment();
    let lastMonthData = [];
    data.forEach(element => {
        const input = moment(element.timeStamp);
        input.month() + 1 === now.month() && lastMonthData.push(element)
    })
    return lastMonthData;
}

export const getFormattedDate = (date, format) => {
    return moment(date).format(format);
}

export const getDataForChart = (data) => {
    let chartData = [];
    data.map(elem => {
      return  elem.amount && chartData.push(elem.amount)
    })
    return chartData;
}

export const getDateForChart = (data) => {
    let dateArr = [];
    data.map(elem => {
        return elem.timeStamp && dateArr.push(getFormattedDate(elem.timeStamp, 'DD MMM YY'));
    })
    return dateArr;
}