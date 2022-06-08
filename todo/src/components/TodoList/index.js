import React from "react";
import Todo from "../Todo";

function TodoList({todos,setTodos}) { // Listelemek için oluşturduğumuz state'i props olarak burda karşılıyoruz
  return (
    <div className="todo-container">
      <div className="todo-list">
        {
          todos.map((todo)=>(

            <Todo 
            text={todo.text}
            key={todo.id}
            todo={todo}  // Map ile dönen todoları props olarak göndericez
            todos={todos} // Tüm todo listeki elemanları todoya gönderdik
            setTodos={setTodos}
             />
          ))
        }
        
      </div>
    </div>
  );
}

export default TodoList;
