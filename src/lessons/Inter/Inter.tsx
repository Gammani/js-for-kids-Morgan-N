import React from 'react';

const Inter: React.FC = () => {

    let timeUp = function() {
        alert("Спасибо Мужык!!!");
    };

    return (
        <div>
            <button onClick={()=>{setTimeout(timeUp, 1000)}}>Жмакни меня!</button>
        </div>
    );
}

export default Inter;

