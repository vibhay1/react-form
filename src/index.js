import React from 'react';
import reactDom from 'react-dom';
import { LoginForm } from './Components';

const App=()=>{
    return( <div className={"container"}>
        <LoginForm/>
        </div>);
};

reactDom.render(<App/>,document.querySelector("#root"));