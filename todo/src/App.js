import './App.css';
import Form from './components/Form';
import React,{useState} from 'react';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("") // İnput değerini almak için state'e atadık
  const [todos,setTodos] = useState([])// Input'dan gelen verileri tutan state(array)
   //Yani butona tıklandığında biz bu verileri bir liste halinde tuttucaz
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
      /> 
      
      <TodoList
      todos={todos}
      setTodos={setTodos} 
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
