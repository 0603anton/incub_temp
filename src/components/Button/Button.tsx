import React from 'react';
import _ from './Button.module.css'

type ButtonPropsType = {
    onOff: boolean
}

export const Button = (props: ButtonPropsType) => {

    const onStyle = {
        background: props.onOff ? 'green' : 'white'
    }
    const offStyle = {
        background: props.onOff ? 'white' : 'red'
    }
    const indicatorStyle = {
        background: props.onOff ? 'green' : 'red'
    }

    return (
        <>
            <div className={_.buttonWrapper}>
                <button style={onStyle}>on</button>
                <button style={offStyle}>off</button>
                <div style={indicatorStyle} className={_.circle}></div>
            </div>
        </>
    );
};
