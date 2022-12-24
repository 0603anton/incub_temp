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

const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED'

const accordionReducer = (state: boolean, action: actionType) => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return !state
        default:
            throw new Error('Bad action type') // свою конкретную ошибку делать
    }
    return state

    // Приоритет использовать switch

    // if (action.type === TOGGLE_COLLAPSED) {
    //     return !state;
    // }
    // return state;

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
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}
