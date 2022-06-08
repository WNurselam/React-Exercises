import React from "react";

function Todo({text,todos,setTodos,todo}) {

  const deleteHandler = () =>{ // Burada todo değerlerini silme işlemi yapıcaz

  setTodos(todos.filter((item)=>item.id!== todo.id)) 
  //TodoList'de  gönderdiğimiz id' eşit değil ise tıkladıklarımın dışındakileri gönder

  }

  const completeHandler = () =>{

    setTodos(todos.map((item)=>{ //Liste'de değişiklik yapıcağımız için setTodos'u kullanıyoruz.

        if(item.id === todo.id){
          return {
            ...item, completed: !item.completed
          }
        }
        return item;
    }))
  }

  return (
    <div className={`todo ${todo.completed ?"completed":""}`}>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check-circle"></i>
      </button>
      <li className="todo-item">{text}</li>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fa fa-minus-circle"></i>
      </button>
    </div>
  );
}

export default Todo;
