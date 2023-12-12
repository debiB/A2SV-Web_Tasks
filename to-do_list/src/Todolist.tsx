import "./Todolist.css";
import { useState } from "react";

interface TodolistProps {
  id: number;
  text: string;
  completed: boolean;
}

const Todolist: React.FC = () => {
  const [todos, setTodos] = useState<TodolistProps[]>([
    {
      id: 1,
      text: "Take out the trash",
      completed: true,
    },
    {
      id: 2,
      text: "Grocery shopping",
      completed: false,
    },
    {
      id: 3,
      text: "Clean gecko tank",
      completed: false,
    },
    {
      id: 4,
      text: "Mow lawn",
      completed: true,
    },
    {
      id: 5,
      text: "Catch up on Arrested Development",
      completed: false,
    },
  ]);
  const [input, setInput] = useState("");
  function handleclick(id: number) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }
const handleClick = () => {
    const newTodo: TodolistProps = {id: Date.now(), text: input, completed: false}
    setTodos([...todos, newTodo])
}
  return (
    <>
      <h1 className="heading">My To Do List</h1>
      <div className="main-div">
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} onClick={() => handleclick(todo.id)} style = {{textDecoration: todo.completed? "line-through": "none"}}>
              {todo.text}
            </li>
          ))}
        </ul>
        <input type="text" placeholder="Add an item" className="input-field" onChange={(e) => setInput(e.currentTarget.value)} />
        <button onClick = {handleClick} >submit</button>
      </div>
    </>
  );
};

export default Todolist;
