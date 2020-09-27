import React, {useState} from 'react';
import './App.css';
import Hello from "./lessons/Hello";


function App() {

    let [words, setWords] = useState<string | null>("Hello World!");


    function changeText() {
        let words = prompt("Введите новый текст");
        setWords(words);
    }

    return (
        <div className="App">
            <Hello words={words} changeText={changeText}/>
        </div>
    );
}

export default App;
