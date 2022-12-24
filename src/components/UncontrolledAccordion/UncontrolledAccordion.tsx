import React, {useReducer} from 'react';
import {accordionReducer, TOGGLE_COLLAPSED} from './reducer';

type AccordionPropsType = {
    value: string,
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}


export function UncotrolledAccordion(props: AccordionPropsType) {

    // const [collapsed, setCollapsed] = useState(true)
    const [state, dispatchCollapsed] = useReducer(accordionReducer, {collapsed:false})


    return (
        <div>
            {/*<AccordionTitle title={props.value} onClick={() => {*/}
            {/*    setCollapsed(!collapsed)*/}
            {/*}}/> */}
            <AccordionTitle title={props.value} onClick={() => {
                dispatchCollapsed({type:TOGGLE_COLLAPSED})
            }}/>
            {!state.collapsed && <AccordionBody/>}
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
