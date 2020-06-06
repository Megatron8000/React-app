import React from 'react';
import classes from './Name.module.css'

const Name = (props) => {
    return <div className={classes.userName}>
        {props.value}
    </div>
}

export default Name