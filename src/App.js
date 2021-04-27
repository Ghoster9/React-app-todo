import React from "react";
import "./App.css";

function App() {
  return <h1 className="header">Hello world</h1>;
  // mengunakan jsx sama seperti diatas
  return React.createElement("h1", { class: "header1" }, "Hello, world");
}

export default App;
