import React from "react";

type PropsType = {
    words: string | null
    changeText: () => void
}

const Hello: React.FC<PropsType> = (props) => {

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