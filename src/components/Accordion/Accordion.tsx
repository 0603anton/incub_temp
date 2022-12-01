import React from 'react';


type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    value: string
    setaccordionValue: () => void
    accordionIsCollapsed: boolean
    items: ItemType[]
    onItemClickHandler: (value: any) => void
}


export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle value={props.accordionIsCollapsed} onClick={props.setaccordionValue} title={props.value}/>
            {!props.accordionIsCollapsed &&
                <AccordionBody onItemClickHandler={props.onItemClickHandler} items={props.items}/>}
        </div>
    )
}


export type AccordionTitlePropsType = {
    title: string
    onClick: () => void
    value: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => props.onClick()}>
            {props.title}
        </h3>
    );
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onItemClickHandler: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <div>
            <ul>
                {props.items.map((i, index) => <li
                    onClick={() => props.onItemClickHandler(i.value)}
                    key={index}>
                    {i.title}</li>)}
            </ul>
        </div>
    );
}

