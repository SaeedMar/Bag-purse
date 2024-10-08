import React from 'react';


//function Button({text, disabled}){
// return (
// <button
// onClick={() =>console.log(text)}
// disabled={disabled}
// >
// {text}
// </button>
// );
// }

function ButtonLoadText(props) {
    console.log(props);
    return (
        <button
            disabled={props.disabled}
            onClick={() => console.log(props.text)}
        >
            {props.text}
        </button>
    );
}

export default ButtonLoadText;