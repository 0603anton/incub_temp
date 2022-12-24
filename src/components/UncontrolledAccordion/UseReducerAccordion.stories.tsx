import React from 'react';
import {action} from '@storybook/addon-actions';

import {UncotrolledAccordion} from './UncontrolledAccordion';


export default {
    title: `UseReducerAccordion`,
    component: UncotrolledAccordion,
}

const callback = action(`accrodion changed`)
const onItemClick = action(`onItemClick`)

export const collapsed = () => <UncotrolledAccordion value={'Some title'}/>;
