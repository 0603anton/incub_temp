import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div className="App">
            <Rating value={3}/>
            <Accordion value={`text for hading`} collapsed={true}/>
            <Accordion value={`false text for heading`} collapsed={false}/>
            <Rating value={4}/>
        </div>
    );
}


export default App;
