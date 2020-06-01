import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Jack
                </div>
                <div className={classes.dialog}>
                    James
                </div>
                <div className={classes.dialog}>
                    Jill
                </div>
                <div className={classes.dialog}>
                    Jack
                </div>
                <div className={classes.dialog}>
                    Joel
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hello World!</div>
                <div className={classes.message}>React is Awesome!</div>
                <div className={classes.message}>Think different</div>
            </div>
        </div>
    )
}

export default Dialogs