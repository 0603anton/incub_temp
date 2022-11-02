import React, {useState} from 'react';

type PropsType = {
    onControlled:boolean
    setOnonControlled:(onControlled:boolean)=>void
}

export const ControlledOnOff = (props: PropsType) => {


    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.onControlled ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.onControlled ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.onControlled ? 'green' : 'red'
    }



    return (
        <div>
            <div style={onStyle} onClick={()=>props.setOnonControlled(true)}>On</div>
            <div style={offStyle} onClick={()=>props.setOnonControlled(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};