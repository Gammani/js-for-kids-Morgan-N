import React, {useState} from 'react';
import './App.css';
import Hello from "./lessons/LessonHello/Hello";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Inter from "./lessons/Inter/Inter";


const App: React.FC = () => {

    let [words, setWords] = useState<string | null>("Hello World!");


    function changeText() {
        let words = prompt("Введите новый текст");
        setWords(words);
    }

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <NavBar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/LessonHello"} render={() => <Hello
                        words={words} changeText={changeText}/>}/>
                    <Route path={"/LessonInter"} render={() => <Inter/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;