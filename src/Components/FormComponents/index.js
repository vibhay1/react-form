import React from 'react'

export const Button = (props) => { //use syntax <Button name={"Button1"} style={"primary"} type={"submit"} margin={"mb-3"}/>
    return (
        <div className={props.margin}>
        <button type={props.type} className={"btn btn-" + props.style}>{props.name}</button>
        </div>
    )
};
export const CheckBox = (props) => { //use syntax <CheckBox name={"CheckBox1"} id={"checkboxid"} margin={"mb-3"}/>
    return (
        <div className={"form-check "+props.margin}>
            <input className="form-check-input" type='checkbox' value="" id={props.id} />
            <label className="form-check-label" htmlFor={props.id}>
                {props.name}
            </label>
        </div>
    )
};
export const Input = (props) => { //use syntax <Input label={"User Name"} id={"userName"} type={"text"} margin={"mb-3"}/>
    return (
        <div className={props.margin}>
            <label htmlFor={props.id} className="form-label">{props.label}</label>
            <input type={props.type} className="form-control" id={props.id} />
        </div>
    )
};


