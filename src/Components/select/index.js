import React, { useEffect, useState,useRef } from 'react';
import styles from './index.module.css';
import classNames from "classnames";

export default function Select(props) {
    const [active,setActive]=useState(false);
    const [pin,setPin]=useState(props.items);
    const [selectedPin,setSelectedPin]=useState('Select Pin');
    const [value,setValue]=useState('');
    const ref = useRef(null);
    // const [btnEnable, setBtnEnable] = useState(true)
   const onClickSelect=(e)=> {
       
       setActive(!active);
    //    if (btnEnable) {
    //         setActive(!active)
    //    }
    //     setBtnEnable(false)
    }
    const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });
    useEffect(()=>{
        setPin(props.items);
    },[active]);
    const onClickList=(e)=>{
        props.onchange(e.target.value);
        setSelectedPin(e.target.value);
        setValue('');
        setActive(false);
     }
     const match = (s) => {
         //console.log("ss",s, props.items)
        const p = Array.from(s).reduce((a, v, i) => `${a}[^${s.substr(i)}]*?${v}`, '');
        const re = RegExp(p);
        
        // return props.items.filter(v => v.match(re));
        
        return props.items.filter(item => {
            return (new RegExp(s)).test(item);
        });
      };
    const onSearch=(e)=>{      
        
          setPin(match(e.target.value).length!==0?match(e.target.value):['no found']);
        setValue(e.target.value);
     }
    const renderOption =pin.map(item => {
        return (
            <li value={item} key={item} onClick={onClickList} >{item}</li>
        )
    });

    return (<div ref={ref}>
        <ul className={"form-control select "+ styles.selectopt} onClick={onClickSelect} value={selectedPin} > {selectedPin}</ul>
            <div   className={classNames("form-control "+[styles.ss_search], { [styles.select_search]: false === active })}>
                <input type="search" className={"form-control "+ styles.ss_search_box} value={value} onChange={onSearch} />
                {renderOption}
            </div>

        
    </div>
    )
};
