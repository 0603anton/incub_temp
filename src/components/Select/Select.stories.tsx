import React, {ChangeEvent, useState} from 'react';
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
    const [selectedValue,setSelectedValue] = useState(`css`)
    const onChangeHandler = (title:any) => {
        setSelectedValue(title)
    }
    return (
        <Select value={selectedValue} onChange={onChangeHandler} items={items}/>
    )
}

//TODO не срабатывает блюр