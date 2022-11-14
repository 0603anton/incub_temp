import React, {SetStateAction, useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: `Accordion`,
    component: Accordion,
}

export const collapsed = () => <Accordion value={`menu`} accordionIsCollapsed={true} setaccordionValue={action(`smth changed`)}/>;
export const uncollapsed = () => <Accordion value={`menu`} accordionIsCollapsed={false} setaccordionValue={action(`smth changed`)}/>;

export const ChangingAccordion = () => {
    const [CollapsedStatus, setCollapsedStatus] = useState<boolean>(false);
    return <Accordion value={`menu`} accordionIsCollapsed={CollapsedStatus} setaccordionValue={()=>setCollapsedStatus(!CollapsedStatus)}/>
}