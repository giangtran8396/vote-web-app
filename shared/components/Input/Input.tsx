import React, { ReactNode } from 'react';
import classes from './Input.module.css';

type Props = {
    type?: string | "",
    placeholder?: string  | "",
    value?: any,
    changed?: React.ChangeEventHandler<HTMLInputElement>,
    children?: ReactNode,
    class?: string  | ""
}

export function Input(props: Props): React.ReactElement {
    let input = (<input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.changed}/>);
    return (
        <div className={[classes.Input, classes[props.class || ""]].join(' ')}>
            { input }
        </div>
    )
}