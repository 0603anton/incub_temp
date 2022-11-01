import React, {useState} from 'react';

type AccordionPropsType = {
    value: string,
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

export function UncotrolledAccordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState(true)



    return (
        <div>
            <AccordionTitle title={props.value} onClick={()=>{setCollapsed(!collapsed)}}/>
            {!collapsed && <AccordionBody/>}
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
