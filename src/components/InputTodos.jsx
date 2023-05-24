import React from "react";

export const InputTodos = (props) => {
    const { todoText, onChange, onClick, disabled } = props;
    const style = {
        backgroundColor: "aqua",
        width: "400px",
        height: "30px",
        padding: "8px",
        margin: "8px",
        borderRadius: "8px"
    }

    return(
        <div style={style}>
            <input
            placeholder="TODOを入力"  
            value={todoText}
            onChange={onChange}
            disabled={disabled}
            />
            <button onClick={onClick}>追加</button>
        </div>
    );
}