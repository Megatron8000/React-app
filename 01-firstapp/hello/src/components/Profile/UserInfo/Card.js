import React from 'react';
import classes from './Card.module.css';


const Card = (props) => {
    return <div className={classes.card}>
     {props.position} {props.organization}
     {props.location}
     {props.subject}
    </div>
}

export default Card