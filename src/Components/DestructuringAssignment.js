import React, {useState} from 'react';
import {MyConsumer} from "./MyContext";

const DestructuringComponent = () => {

    const [name, setName]=useState({
        name:"Pappu"
    });

    const changeHendeler=()=>{
        setName({name:"Zakaria"})
    }

    return (
        < div >
            <MyConsumer>
                {
                    msg=>{
                     return msg;
                    }
                }
            </MyConsumer>
            <h2>{name.name}</h2>
            <button onClick={changeHendeler}>Change name</button>
        < /div>
    );
};

export default DestructuringComponent;
