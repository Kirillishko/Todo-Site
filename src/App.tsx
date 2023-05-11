import React, {useEffect, useState} from 'react';
import './App.css';
import './UI/UI.css';
import {ITodo} from "./interfaces/ITodo";
import TodoList from "./components/TodoList";
import MyButton from "./UI/Button/MyButton";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<ITodo[]>([]);
  const [unCompletedTodos, setUnCompletedTodos] = useState<ITodo[]>([]);

  const onCompletedChange = (todo: ITodo) => {
      setTodos(todos.map((value) => {
          if (value.id === todo.id)
              value.completed = !value.completed;

          return value;
      }));
  }

  const setBothTodos = () => {
      setCompletedTodos(todos.filter(value => value.completed));
      setUnCompletedTodos(todos.filter(value => !value.completed));
  }

  useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=10&_page=2")
          .then(response => response.json())
          .then(json => setTodos(json));
  }, []);

  useEffect(() => {
      setBothTodos();
  }, [todos]);

  const addTodo = (todo: ITodo) => {
      setTodos([...todos, todo]);
  }

  return (
    <div className="App">
        <div className={"todoLists"}>
            <TodoList title={"Завершённые задачи"} todos={completedTodos} onChange={onCompletedChange}/>
            <TodoList title={"Незавершённые задачи"} todos={unCompletedTodos} onChange={onCompletedChange}/>
        </div>
        <MyButton title={"Добавить задачу"} onChange={addTodo}/>
    </div>
  );
}

export default App;
