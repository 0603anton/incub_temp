import React, {SetStateAction, useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from './Accordion';
import {log} from 'util';


export default {
    title: `Accordion`,
    component: Accordion,
}

const callback = action(`accrodion changed`)
const onItemClick = action(`onItemClick`)

export const collapsed = () => <Accordion items={[{title: 'anton', value: 1}]} value={`menu`}
                                          accordionIsCollapsed={true} setaccordionValue={action(`smth changed`)}
                                          onItemClickHandler={callback}/>;
export const uncollapsed = () => <Accordion items={[{title: 'anton', value: 1}]} value={`menu`}
                                            accordionIsCollapsed={false} setaccordionValue={action(`smth changed`)}
                                            onItemClickHandler={callback}/>;

export const ChangingAccordion = () => {
    const [CollapsedStatus, setCollapsedStatus] = useState<boolean>(false);
    return <Accordion
        items={[{title: 'anton', value: 1}, {title: 'anton', value: 2}, {title: 'anton', value: 3}, {
            title: 'anton',
            value: 4
        }, {title: 'anton', value: 5}]}
        value={`menu`}
        accordionIsCollapsed={CollapsedStatus}
        setaccordionValue={() => setCollapsedStatus(!CollapsedStatus)}
        onItemClickHandler={(id)=>alert(`user with ID ${id} clicked the mouse`)}
    />
}