import React, {useState} from 'react';
import {ControlledOnOff} from "./ControlledOnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: `OnOff`,
    component: ControlledOnOff,
}

const callback = `on or off clicked`;

export const onMode = () => <ControlledOnOff onControlled={true} setOnonControlled={action(callback)}/>;
export const offMode = () => <ControlledOnOff onControlled={false} setOnonControlled={action(callback)}/>;

export const ChangingOnOff = () => {
    const [onOffStatus, setOnStatus] = useState<boolean>(false);
    return <ControlledOnOff onControlled={onOffStatus} setOnonControlled={setOnStatus}/>
}