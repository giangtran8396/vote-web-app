import React, { MouseEventHandler, ReactNode } from 'react';
import classes from './Button.module.css'

type Props = {
    btnType: string,
    disabled?: boolean,
    clicked?: MouseEventHandler,
    children?: ReactNode
}

export function Button(props: Props):React.ReactElement {
    return (
        <button className={[classes.Button,classes[props.btnType]].join(' ')}
            disabled={props.disabled}
            onClick={props.clicked}
            >{props.children}</button>
    );
}
