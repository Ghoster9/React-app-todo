import "./TodoList.css";

const TodoList = (props) => {
  console.log(props.dataTodos); // melihat data todos
  return (
    <ul>
      {/* // map digunakan untuk mengeluarkan isi */}
      {props.dataTodos.map((todo) => {
        // {id:1, title: 'eat'}
        return <li key={todo.id}>{todo.title}</li>;
      })}
    </ul>
  );
};
//42:25
export default TodoList;
