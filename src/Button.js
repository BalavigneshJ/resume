import React from 'react';

function Button(props) {
    const cName = "button"
    return (
        <button className={props.className ? props.className+" "+cName : cName } onClick={props.click}>{props.name}</button>
    );
}

export default Button;
