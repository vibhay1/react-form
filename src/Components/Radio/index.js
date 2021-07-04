import React, { useState } from 'react';
import propTypes from 'prop-types'
import styles from './index.module.css'
import classNames from "classnames";


function Radio(props) {
    const [active, setActive] = useState('')
    const onChangeValue = (e) => {
        props.onchange(e.target.value);

    }
    const onClickValue = (value) => {
        // const [{ value }] = props.items.filter(item => item.name === e.target.innerHTML);
        props.onchange(value);
       setActive(value);
        // console.log(e.target.dataset.value)
    }
    const renderList = props.items && props.items.map(item => {
        if (props.radioType=== 'vertical_radio') {
            return (
                <div
                    className={
                        classNames(styles.radio_v, { [styles.radio_active]: item.value === active })
                    }
                    onClick={()=>onClickValue(item.value)}
                    key={item.name}
                //   data-value={item.value}>
                >
                    {item.name}
                </div>
            )
        } else {
            return (
                <div key={item.name}>
                    <input
                        type="radio"
                        id={item.value}
                        name={props.name}
                        value={item.value}
                        onChange={onChangeValue}
                    />
                    <label htmlFor={item.value}>{item.name}</label>
                </div>
            )
        }
    });

    return (
        <div>
            {renderList}
        </div>
    )
}

Radio.propTypes = {
    items: propTypes.array,
    name: propTypes.string

};
export default Radio
