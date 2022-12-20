import React, {ChangeEvent, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Select2 from "./Select2";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Select',
    component: Select2,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

export const SelectWithValue = () => {

    const [value,setValue] = useState(`1`)

    const items = [
        {title: `css`, value: `1`},
        {title: `html`, value: `2`},
        {title: `react`, value: `3`},
        {title: `redux`, value: `4`},
    ]
    return (
        <>
            <Select2
                value={value}
                onChange={setValue}
                items={items}/>


        </>
    )
}

export const SelectWithoutValue = () => {

    const [value,setValue] = useState(null)

    const items = [
        {title: `css`, value: `1`},
        {title: `html`, value: `2`},
        {title: `react`, value: `3`},
        {title: `redux`, value: `4`},
    ]
    return (
        <>
            <Select2
                value={value}
                onChange={setValue}
                items={items}/>
        </>
    )
}


