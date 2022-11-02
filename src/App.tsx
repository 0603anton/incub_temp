import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import {Rating} from './components/Rating/Rating';
import {TasksType} from './Todolist/Todolist';
import {UncotrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {ControlledRating, PropsValueType} from "./components/Rating/ControlledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {ControlledOnOff} from "./components/OnOff/ControlledOnOff";

let tasks1: Array<TasksType> = [
    {
        isDone: true,
        title: `CSS`,
        id: 1
    },
    {
        isDone: true,
        title: `JS`,
        id: 2
    },
    {
        isDone: false,
        title: `React`,
        id: 3
    }
]
let tasks2: Array<TasksType> = [
    {
        isDone: true,
        title: `Грокаем`,
        id: 4
    },
    {
        isDone: true,
        title: `Learn JS`,
        id: 5
    },
    {
        isDone: false,
        title: `React documentation`,
        id: 6
    }
]

function App() {

    const [value,setValue] = useState<PropsValueType>(0)
    const [accordionIsCollapsed, setaccordionValue] = useState(false)
    const [onControlled, setOnonControlled] = useState(false);

    return (
        <div className="App">
            <Rating/>
            <ControlledOnOff onControlled={onControlled} setOnonControlled={setOnonControlled}/>
            <ControlledRating value={value} onClick={setValue}/>
            <Accordion value={`Controlled`} accordionIsCollapsed={accordionIsCollapsed} setaccordionValue={()=>setaccordionValue(!accordionIsCollapsed)}/>
            {/*<Accordion value={`2nd text for heading`} collapsed={false}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Todolist title="What to learn" tasks={tasks1}/>*/}
            {/*<Todolist title="What to read" tasks={tasks2}/>*/}
            {/*<Button onOff={false}/>*/}
            {/*<Button onOff={false}/>*/}
            {/*<Button onOff={true}/>*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            <UncotrolledAccordion value={`some text`}/>
            {/*<UncotrolledAccordion value={`some text`}/>*/}
        </div>
    );
}


export default App;
