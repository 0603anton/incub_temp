import React from 'react';

type ItemType = {
    title: string
    value: any
}


type SelectPropsType={
    value:any
    onChange:(value:any)=>void
    items: ItemType[]
}


const Select = (props:SelectPropsType) => {
    let cuurentvalue = props.items.filter((val)=> val.title === props.value)
    return (
        <div>
            {/*// текущий итем через фильтр всех итемов и сравнить с вэлью*/}
            <div>{}</div>
        {/*    если раскукожить все items*/}
            {props.items.map(i => <div>{i.title}</div>)}
        </div>
    );
};

export default Select;