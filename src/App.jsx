import React, { useState } from "react";
import "./style.css";
import { InputTodos } from "./components/InputTodos"
import { IncompleteTodos } from "./components/IncompleteTodos"
import { CompleteTodos } from "./components/CompleteTodos"

export const App = () => {
    // useState群
    const [incompleteTodos,setIncompleteTodos] = useState([]);
    const [completeTodos,setCompleteTodos] = useState([]);
    const [todoText, setTodoText] = useState("");

    //関数群
    const onChangeTodoText = (event) => setTodoText(event.target.value);
    const onClickAdd = () => {
        if (todoText === "") return;
        const newTodos = [...incompleteTodos,todoText];
        setIncompleteTodos(newTodos);
        setTodoText("");
    }
    const onClickDelete = (index) => {
       const newTodos = [...incompleteTodos];
       newTodos.splice(index,1);
       setIncompleteTodos(newTodos);
    }
    const onClickComplete = (index) => {
        const newIncompleteTodos = [...incompleteTodos];
        newIncompleteTodos.splice(index,1);

        const newCompleteTodos = [...completeTodos,incompleteTodos[index]];
        setIncompleteTodos(newIncompleteTodos);
        setCompleteTodos(newCompleteTodos);
    }
    const onClickBack = (index) => {
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index,1);
        
        const newIncompleteTodos = [...incompleteTodos,completeTodos[index]];

        setIncompleteTodos(newIncompleteTodos);
        setCompleteTodos(newCompleteTodos);
    }

    //html処理
    return (
        <>
        <InputTodos 
            todoText={todoText} 
            onChange={onChangeTodoText}
            onClick={onClickAdd}
            disabled={incompleteTodos.length >= 5}
        />
        {incompleteTodos.length >= 5 && 
            <p>5個以上のTodoは、入力できません。</p>       
        }
        <IncompleteTodos
            incompleteTodos={incompleteTodos} 
            onClickComplete={onClickComplete}
            onClickDelete={onClickDelete}
        />
        <CompleteTodos
            completeTodos={completeTodos} 
            onClickBack={onClickBack}
        />
        </>
    );
}
