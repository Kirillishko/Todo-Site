import React, {FC} from 'react';
import {ITodo} from "../interfaces/ITodo";

interface ITodoItemProps {
    todo: ITodo,
    onChange: (todo: ITodo) => void,
}

const TodoItem:FC<ITodoItemProps> = ({todo, onChange}) => {

    const change = () => {
        // todo.completed = !todo.completed;
        onChange(todo);
    }

    return (
        <div className={"todo"}>
            <div className={"todo-left"}>
                <h3>{todo.userId}</h3>
                <h2>{todo.title}</h2>
            </div>
            <div className={"todo-right"}>
                <h5>{todo.id}</h5>
                <input type={"checkbox"} checked={todo.completed} onChange={change}></input>
            </div>
        </div>
    );
};

export default TodoItem;