import React from "react";

export type AccordionPropsType = {
    value: string
    setaccordionValue: ()=>void
    accordionIsCollapsed:boolean
    items: string[]
}

export type AccordionTitlePropsType = {
    title:string
    onClick:()=>void
    value:boolean
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
    <AccordionTitle value={props.accordionIsCollapsed} onClick={props.setaccordionValue} title={props.value}/>
    {!props.accordionIsCollapsed && <AccordionBody items={props.items}/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={()=>props.onClick()}>
            {props.title}
        </h3>
    );
}

type AccordionBodyPropsType={
    items: string[]
}

function AccordionBody(props:AccordionBodyPropsType) {
    return (
        <div>
            <ul>
                {props.items.map(i=> <li>{i}</li>)}
            </ul>
        </div>
    );
}

