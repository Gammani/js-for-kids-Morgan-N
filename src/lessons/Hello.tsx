import React from "react";

type PropsType = {
    words: string | null
    changeText: () => void
}

function Hello(props: PropsType) {

    return (
        <div>
           <div>
               <h1>
                   {props.words}
               </h1>
               <button onClick={props.changeText}>изменить текст</button>
           </div>
        </div>
    );
}

export default Hello;