import React from 'react'

export const Button = (props) => { //use syntax <Button name={"Button1"} style={"primary"} type={"submit"} margin={"mb-3"}/>
    return (
        <div className={props.margin}>
        <button type={props.type} className={"btn btn-" + props.style}>{props.name}</button>
        </div>
    )
};