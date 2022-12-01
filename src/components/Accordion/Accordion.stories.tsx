import React, {SetStateAction, useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: `Accordion`,
    component: Accordion,
}

export const collapsed = () => <Accordion items={[]} value={`menu`} accordionIsCollapsed={true} setaccordionValue={action(`smth changed`)}/>;
export const uncollapsed = () => <Accordion items={['anton','anton','anton','anton','anton']} value={`menu`} accordionIsCollapsed={false} setaccordionValue={action(`smth changed`)}/>;

export const ChangingAccordion = () => {
    const [CollapsedStatus, setCollapsedStatus] = useState<boolean>(false);
    return <Accordion items={['anton','anton','anton','anton','anton']} value={`menu`} accordionIsCollapsed={CollapsedStatus} setaccordionValue={()=>setCollapsedStatus(!CollapsedStatus)}/>
}