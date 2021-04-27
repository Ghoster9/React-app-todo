import "./Todo.css";
import { useState } from "react";
import TodoList from "../todo-list/TodoList";
import TodoCreate from "../todo-create/TodoCreate";

const Todo = () => {
  // use state untuk merender ulang jika ada data baru yang di tambah
  // perlu triager setTodo
  // seperti getter dan setter oop getTodos da setTodos akan mengambil data dari todos
  // get untuk mendapatkan data dan set untukset datanya

  const [getTodos, setTodos] = useState([
    { id: 1, title: "Eat" },
    { id: 2, title: "Sleap" },
    { id: 3, title: "Code" },
  ]);

  // method ini akan mengirim data ke const todos
  const eventCreateTodo = (todo) => {
    setTodos(getTodos.concat(todo)); //mendapatkan data dari getTodos lalu tambah data mengunakan concat
    console.log(getTodos);
  };

  return (
    <div>
      <h3> Todo List</h3>
      <TodoCreate onCreateTodo={eventCreateTodo} />
      <TodoList dataTodos={getTodos} />
    </div>
  );
};

export default Todo;
