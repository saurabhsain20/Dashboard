import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';

const useStyles = makeStyles({  
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  contentContainer : {
    display: 'flex',
    flexDirection: 'column',
  },
  singleContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: 'bisque',
    margin: '3px',
    padding: 0,
    // marginTop: '60px'
  }
});

export default function CardComponent(props) {
  const classes = useStyles();
  const {
    width,
    firstTitle,
    firstValue,
    secondTitle,
    secondValue,
    id,
  } = props;
  return (
      <div style={{ width }}>
    <Card id={id} className={classes.card}>
      <CardContent className={classes.contentContainer}>
        <div className={classes.singleContent}>
        <h1 className={classes.text}>{firstTitle}</h1> 
        <h1 className={classes.text}>{firstValue}</h1>
        </div>
        <div className={classes.singleContent}>
        <h1 className={classes.text}>{secondTitle}</h1> 
        <h1 className={classes.text}>{secondValue}</h1> 
        </div>
      </CardContent>
    </Card>
    </div>
  );
}

CardComponent.propTypes = {
  id: PropTypes.number,
  firstTitle: PropTypes.string,
  firstValue: PropTypes.number,
  secondTitle: PropTypes.string,
  secondValue: PropTypes.number,
  width: PropTypes.string,
}