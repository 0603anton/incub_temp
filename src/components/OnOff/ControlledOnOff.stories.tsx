import React, {useState} from 'react';
import {ControlledOnOff} from './ControlledOnOff';
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'ControlledOnOff',
    component: ControlledOnOff,
    argTypes: { onClick: { action: 'clicked' } },
}


export const OnOffOff = () => <ControlledOnOff onControlled={false} setOnonControlled={x=>x} />
export const OnOffOn = () => <ControlledOnOff onControlled={true} setOnonControlled={x => x}/>


export const ChangeOnOffb = () => {
    const [value, setValue] = useState<boolean>(false)
    return <ControlledOnOff onControlled={value} setOnonControlled={setValue}/>
}

// TODO ACTION HOW TO USE

