import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";


export default {
    title: `input`,
    // component: Accordion,
    argTypes: { onClick: { action: 'clicked' } },
}


export const UncotrolledInput = () => <input/>;

// вынеси в отдельную функцию наверх с ончэйнджа

export const TrackValueOfUncotrolledInput = () => {
    const [value, setValue] = useState(``)
    return <> <input onChange={event => {
        setValue(event.currentTarget.value)
    }
    }/> - {value}</>;
}
// делать способом который ниже не приемлимо в реакте т.к идёт нарушение его прицнипов, а именно обращение к реальному а не виртуальному дом
// с id не используем
export const GetValueOfUncotrolledInputbyButtonClick = () => {
    const [value, setValue] = useState(``)
    const el = document.getElementById(`elem`) as HTMLInputElement
    return <> <input id={`elem`}/>
        <button onClick={() => {
            setValue(el.value)
        }}>save
        </button>
        actuel value- {value}</>;
}


// решение через рефы

export const GetValueOfUncotrolledInputbyButtonClick_1_useREF = () => {
    const [value, setValue] = useState(``)
    const inputRef = useRef<HTMLInputElement>(null) // создаём ссылку с помощью хука

    const save = () => {
        const el = inputRef.current as HTMLInputElement // as для того что мы уверены, что значение не будет null
        setValue(el.value) // current будет работать когда мы уже присвоили атрибут в HTML см ниже и булеи ссылаться на этот элемент
    }

//через атрибут привязываем эту ссылку след строка
    return <> <input ref={inputRef} id={`elem`}/>
        <button onClick={save}>save</button>
        actuel value- {value}</>;
}
// рефы следует избегать


// КАБЗЛА 13 FLUX контролируемый элмент


export const CotrolledInput = () => {
    const [parentValue,setParentValue]=useState(``);
const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{setParentValue(e.currentTarget.value)}
    return <input value={parentValue} onChange={onChangeHandler}/>;
}


export const ControlledCheckbox = () => {
    const [parentValue,setParentValue]=useState<boolean>(true);
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{setParentValue(e.currentTarget.checked)}
    return <input type={"checkbox"} checked={parentValue} onChange={onChangeHandler}/>;
}

const ControlledSelect = () => {
    const [parentValue,setParentValue]=useState<string | undefined>(undefined);
    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>)=>{setParentValue(e.currentTarget.value)}
    return <select value={parentValue} onChange={onChangeHandler} name="" id="">
        <option >none</option>
        <option value={`1`}>Minsk</option>
        <option value={`2`}>Moscow</option>
        <option value={`3`}>Kiev</option>
    </select>
}
