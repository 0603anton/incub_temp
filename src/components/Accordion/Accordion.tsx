import React from "react";

function Accordion(props:any) {
    return (
        <div>
            <AccordionTitle newvalue={props.value}/>
            <AccordionBody/>
        </div>
    );
}

function AccordionTitle(props:any) {
    return (
        <h3>
            {props.newvalue}
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