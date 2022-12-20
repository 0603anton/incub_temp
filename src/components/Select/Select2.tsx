import React, {KeyboardEvent, useEffect, useState} from 'react';
import './Select.css';
import styles from "./Select2.module.css"

type ItemType = {
    title: string
    value: any
}


type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}


const Select2 = (props: SelectPropsType) => {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, sethoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredElementItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        sethoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => {
        setActive(!active)
    }

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === `ArrowDown` || e.key === `ArrowUp`) {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {

                    const pretendentElement = e.key === `ArrowDown` ? props.items[i + 1] : props.items[i - 1];


                    if (pretendentElement) {
                        props.onChange(pretendentElement.value);
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === `Enter` || e.key === `Escape`) {
            setActive(false);
        }

    }


    return (
        <>
            <div className={styles.select} onKeyDown={onKeyUp} tabIndex={0}>
                {/*+ ' ' + (active ? styles.active : ``) если средствами css это всё убирать*/}
                <span className={styles.main} onClick={toggleItems}>
                    {selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => sethoveredElementValue(i.value)}
                            className={styles.item + ' ' + (hoveredElementItem === i ? styles.selected : ``)}
                            key={i.value}
                            onClick={
                                () => onItemClick(i.value)
                            }
                        >
                            {i.title}</div>)}
                    </div>
                }
            </div>
        </>
    )
    // const [collapsed, setCollapsed] = useState(false)
    // const selectOnClickHandler = () => {
    //     setCollapsed(!collapsed)
    //     console.log(`click`)
    // }
    // const blurHandler = () => {
    //     console.log(`blur`)
    //     setCollapsed(false)
    // }
    // let cuurentvalue = props.items.filter((val)=> val.title === props.value)
    // return (
    //     <div  onClick={selectOnClickHandler} className={`container`}>
    //         {/*// текущий итем через фильтр всех итемов и сравнить с вэлью*/}
    //         <div onBlur={blurHandler} >{cuurentvalue.map(i => <div key={i.value}>{i.title}</div>)}</div>
    //     {/*    если раскукожить все items*/}
    //         {collapsed ? props.items.map(i => <div key={i.value} onClick={()=>props.onChange(i.title)}>{i.title}</div>) : ``}
    //     </div>
    // );
};

export default Select2;