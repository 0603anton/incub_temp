import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from './Select';
import {action} from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Select',
    component: Select,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

export const SomeSelect = ()=>{
    const items = [
        {title:`css`, value: 1},
        {title:`html`, value: 2},
        {title:`react`, value: 3},
        {title:`redux`, value: 4},
    ]
    const [selectValue,setSelectValue] = useState(`css`)
    return (
        <Select value={selectValue} onChange={setSelectValue} items={items}/>
    )
}