import React from 'react';
import classes from './Description.module.css';

const Description = () => {
    return <div className={classes.card}>
        <h3 className={classes.info}> Name: </h3> 
        <p className={classes.data}> Jack Jones</p> 
        <h3 className={classes.info}> Age: </h3>
        <p className={classes.data}> 32 </p>
        <h3 className={classes.info}> Interests: </h3> 
        <p className={classes.data}> Web dev, Music, Travelling </p>
    </div>
}

export default Description