import React from 'react';



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