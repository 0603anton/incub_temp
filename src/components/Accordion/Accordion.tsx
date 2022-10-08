import React from "react";

type AccordionPropsType = {
    value: string,
    collapsed: boolean;
}

type AccordionTitlePropsType = {
    title:string
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
    <AccordionTitle title={props.value}/>
    {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>
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

export default Accordion;