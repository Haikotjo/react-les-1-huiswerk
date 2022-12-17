import React from 'react';

function Buttons({buttonTag}) {
    function logClick() {
        console.log(buttonTag);
    }
    return (
        <button onClick={logClick}>{buttonTag}</button>
    );
}

export default Buttons;