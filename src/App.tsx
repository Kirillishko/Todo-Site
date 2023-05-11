import React, {useEffect, useState} from 'react';
import './App.css';
import {ITodo} from "./interfaces/ITodo";
import {json} from "stream/consumers";
import TodoList from "./components/TodoList";
import MyButton from "./UI/Button/MyButton";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<ITodo[]>([]);
  const [unCompletedTodos, setUnCompletedTodos] = useState<ITodo[]>([]);

  useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=10&_page=2")
          .then(response => response.json())
          .then(json => setTodos(json));
  }, []);

    useEffect(() => {
        setCompletedTodos(todos.filter(value => value.completed));
        setUnCompletedTodos(todos.filter(value => !value.completed));
    }, [completedTodos, unCompletedTodos]);

  // const completedTodos = todos.filter(value => value.completed);
  // const unCompletedTodos = todos.filter(value => !value.completed);

  const onCompletedChange = (todo: ITodo) => {
      todo.completed = !todo.completed;
  }

  return (
    <div className="App">
        <MyButton title={"Добавить задачу"}/>
        <div className={"todoLists"}>
            <TodoList title={"Завершённые задачи"} todos={completedTodos}/>
            <TodoList title={"Незавершённые задачи"} todos={unCompletedTodos}/>
        </div>
    </div>
  );
}

export default App;
