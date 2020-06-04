import React from 'react';
import classes from './Dialogs.module.css';
import friend from './friend.jpg'

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <img src={friend} alt='friendAva' />
                    Jack
                </div>
                <hr />
                <div className={classes.dialog}>
                <img src={friend} alt='friendAva' />
                    James
                </div>
                <hr />
                <div className={classes.dialog}>
                <img src={friend} alt='friendAva' />
                    Jill
                </div>
                <hr />
                <div className={classes.dialog}>
                <img src={friend} alt='friendAva' />
                    Jack
                </div>
                <hr />
                <div className={classes.dialog}>
                <img src={friend} alt='friendAva' />
                    Joel
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hello World!</div>
                <div className={classes.message}>React is Awesome!</div>
                <div className={classes.message}>Think different</div>
                <div className={classes.answer}>Thank you</div> 
            </div>
        </div>
    )
}

export default Dialogs