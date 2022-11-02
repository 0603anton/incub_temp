import React from "react";

type AccordionPropsType = {
    value: string
    setaccordionValue: ()=>void
    accordionIsCollapsed:boolean
}

type AccordionTitlePropsType = {
    title:string
    onClick:()=>void
    value:boolean
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
    <AccordionTitle value={props.accordionIsCollapsed} onClick={props.setaccordionValue} title={props.value}/>
    {!props.accordionIsCollapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onClick}>
            {props.title}
        </h3>
    );
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}

