import React, {useReducer, useState} from 'react';

type AccordionPropsType = {
    value: string,
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

type actionType = {
    type: string
}


const accordionReducer = (state: boolean, action: actionType) => {
    if (action.type === 'TOGGLE_COLLAPSED') {
        return !state;
    }
    return state;
}


export function UncotrolledAccordion(props: AccordionPropsType) {

    // const [collapsed, setCollapsed] = useState(true)
    const [collapsed, dispatchCollapsed] = useReducer(accordionReducer, false)


    return (
        <div>
            {/*<AccordionTitle title={props.value} onClick={() => {*/}
            {/*    setCollapsed(!collapsed)*/}
            {/*}}/> */}
            <AccordionTitle title={props.value} onClick={() => {
                dispatchCollapsed({type:'TOGGLE_COLLAPSED'})
            }}/>
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

            </ul>
        </div>
    );
}
