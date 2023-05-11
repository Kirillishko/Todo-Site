import React, {FC} from 'react';
import {ITodo} from "../interfaces/ITodo";
import TodoItem from "./TodoItem";

interface ITodoListProps {
    todos: ITodo[],
    title: string,
    onChange: (todo: ITodo) => void,
}

const TodoList:FC<ITodoListProps> = ({todos, title, onChange}) => {



    return (
        <div className={"todoList"}>
            <h1>{title}</h1>
            {todos.map((todo) => <TodoItem todo={todo} onChange={onChange} key={todo.id}/>)}
        </div>
    );
};

export default TodoList;