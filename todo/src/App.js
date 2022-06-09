import "./App.css";
import Form from "./components/Form";
import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState(""); // İnput değerini almak için state'e atadık
  const [todos, setTodos] = useState([]); // Input'dan gelen verileri tutan state(array)
  //Yani butona tıklandığında biz bu verileri bir liste halinde tuttucaz

  const [status, setStatus] = useState("all"); // tüm listeyi almak için
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(()=>{

    filteredHandler(todos)

  },[todos,status])





  const filteredHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true)); //completed olanları al
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.uncompleted === true)); //uncompleted olanları al
        break;
      default: // tüm listeyi getir
        setFilteredTodos(todos);
        break;
    }
  };
  return (
    <div className="App">
      <header>
        <h1>MY TODO LİST</h1>
      </header>

      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />

      <TodoList 
      todos={todos} 
      setTodos={setTodos}
      filteredTodos={filteredTodos}
       />
    </div>
  );
}

export default App;

/*
<Form inputText={inputText} setInputText={setInputText}/>  props yardımı ile Forma atadık state'i


=> Listelemek için TodoListe props ile gönderiyoruz
<TodoList
      todos={todos}
      setTodos={setTodos} 
/>

*/
