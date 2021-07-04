import React from 'react';
import { Button,CheckBox, Input } from './FormComponents';
import Radio from './Radio';
import Select from './select';
// import styles from './index.module.css'
const handelOfSelect = (data) =>{
    console.log(data);
    }
export const LoginForm = () => {
    const PINCODE=['274304','274402','274303','274305','274306','274301','274309','224402','228902','845451','845418','845455']
    return (
        <div className="row" onSubmit={(e)=>e.preventDefault()}>
            <form action="/">
            <Input label={"User Name"} type={"text"} id={"userName"} margin={"mb-3"}/>
            <CheckBox name={"remember me"} id={"remember"} margin={"mb-3"}/>
            <Select items={PINCODE} name="pincode" margin="mb-3" onchange={handelOfSelect}/>
            <Button type={"submit"} style={"success"} name={"Submit"} margin={"mb-2"}/>

            
            </form>
        </div>
    )
}





const handelOnChange = (data) =>{
console.log(data);
}
export const RadioButton = () =>{
    const items=[{name:'Maruti',value:'MA'},{name:'BMW',value:'BM'},{name:'TATA',value:'TA'},{name:'Toyata',value:'TO'}];
    return (
        <>
            <Radio 
                    items={items} 
                    name='car'
                    onchange={handelOnChange}
                    //radioType={'vertical_radio'}
                />
                <Radio 
                    items={items} 
                    name='car'
                    onchange={handelOnChange}
                    radioType={'vertical_radio'}
                />
        </>
       
    );
}