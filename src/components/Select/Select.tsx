import React, {useState} from 'react';
import './Select.css';

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
    const [collapsed, setCollapsed] = useState(false)
    const selectOnClickHandler = () => {
        setCollapsed(!collapsed)
    }
    const blurHandler = () => {
        setCollapsed(!collapsed)
    }
    let cuurentvalue = props.items.filter((val)=> val.title === props.value)
    return (
        <div onBlur={blurHandler} className={`container`}>
            {/*// текущий итем через фильтр всех итемов и сравнить с вэлью*/}
            <div onClick={selectOnClickHandler} >{cuurentvalue.map(i => <div key={i.value}>{i.title}</div>)}</div>
        {/*    если раскукожить все items*/}
            {collapsed ? props.items.map(i => <div key={i.value} onClick={()=>props.onChange(i.title)}>{i.title}</div>) : ``}
        </div>
    );
};

export default Select;