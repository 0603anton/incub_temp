import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {TasksType, Todolist} from "./Todolist/Todolist";

let tasks1:Array<TasksType> = [
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
let tasks2:Array<TasksType> = [
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

    return (
        <div className="App">
            <Rating value={3}/>
            <Accordion value={`text for hading`} collapsed={true}/>
            <Accordion value={`false text for heading`} collapsed={false}/>
            <Rating value={4}/>
            <Todolist title="What to learn" tasks={tasks1}/>
            <Todolist title="What to read" tasks={tasks2}/>
        </div>
    );
}


export default App;
