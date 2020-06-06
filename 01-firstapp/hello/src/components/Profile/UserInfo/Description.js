import React from 'react';
import classes from './Description.module.css';
import Name from './Name';
import Card from './Card';




const Description = () => {
    return <div>
        <Name value='User Testov' />
           
        <div className={classes.card}>
            <div className={classes.info}> Works as a <Card position='front-end developer'  organization= 'Pied Piper'/> </div> 
            <div className={classes.info}> Studied at <Card organization= 'Harvard University'/> </div> 
            <div className={classes.info}> Lives in <Card location= 'Palo Alto'/>  </div> 
            <div className={classes.info}> Married to <Card subject= 'Beautiful Wife'/> </div> 
        </div>
    </div>
}

export default Description