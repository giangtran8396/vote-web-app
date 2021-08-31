import React from 'react';
import { Button } from '../../../../shared/components';
import classes from './AuthIntro.module.css';

export function AuthIntro(): React.ReactElement  {
    return (
        <div className={classes.AuthIntro}>
            <div className={classes.Content}>
                <div className={classes.Title}>
                    <p>New to our Shop?</p>
                </div>
                <div className={classes.Description}>
                    <span>There are advances being made in science and technology everyday, and a good example of this is the</span>
                </div>
                <div className={classes.Btn}>
                    <Button btnType="Auth_Intro_btn">CREATE AN ACCOUNT</Button>
                </div>
            </div>
        </div>
    )
}