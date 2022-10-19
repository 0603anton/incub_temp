import React from 'react';

type PropsType = {
    on:boolean
}

export const OnOff = (props:PropsType) => {

    const onStyle= {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block'
    }
    const offStyle= {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block'
    }
    const indicatorStyle = {
        width: '30px',
        height:'30px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px'
    }

    return (
        <div>
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};