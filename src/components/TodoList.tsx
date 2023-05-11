import React, {FC} from 'react';
import {ITodo} from "../interfaces/ITodo";
import TodoItem from "./TodoItem";

interface ITodoListProps {
    todos: ITodo[],
    title: string,
}

const TodoList:FC<ITodoListProps> = ({todos, title}) => {



    return (
        <div className={"todoList"}>
            <h1>{title}</h1>
            {todos.map((todo) => <TodoItem todo={todo} key={todo.id}/>)}
        </div>
    );
};

export default TodoList;