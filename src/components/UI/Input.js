import React from "react";

import classes from "../UI/Input.module.css"

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.Input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input}/>
        </div>
    );
});

export default Input;