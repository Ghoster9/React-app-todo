import "./TodoCreate.css";
import { useState } from "react";

const TodoCreate = (props) => {
  // getInput untuk mendpatkan sedangkan setInputTodo untuk mengubah data
  const [getInputTodo, setInputTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // cegah agar web tidak merefresh ketika di submit

    const newTodo = {
      id: Math.floor(Math.random() * 100) + 1, // bilangan bulat dari 100 tidak ada nol maka di tambah 1

      title: getInputTodo,
    };

    props.onCreateTodo(newTodo); // ini akan mengirim data ke todos yangdipush
    setInputTodo(""); // ini agar data akan kosong kembali jika di kirim

    //console.log(newTodo);
  };

  // jika terjadi perubahan data maka akan dijalankan handleInputTodo
  const handleInputTodo = (event) => {
    // mengunakan setInputTodo untuk set atau merubah data

    // event.taget.value akan mengarahkan ke onChange jika ada perubahan data, ini bisa dilihat jika ada data yang masuk ke onChange maka setiap data akan ter record
    setInputTodo(event.target.value); // dapatkan data dari inputan
    console.log(getInputTodo); // ini akan menampilkan setiap value yang masuk di log
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" value={getInputTodo} onChange={handleInputTodo} />
      <button type="submit">Add</button>
    </form>
  );
  //value={getInputTodo} agar value kosong kembali
};

export default TodoCreate;
