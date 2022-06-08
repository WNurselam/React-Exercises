import React from 'react'

function Form({inputText,setInputText,todos,setTodos}) {

    const submitTodoHandler = (e) =>{
        e.preventDefault();

        setTodos([       // ile input verilerini al
            ...todos,
            {
                text:inputText, completed:false, id:Math.floor(Math.random()*10)
            }
        ])

        // console.log(todos);
        
        setInputText("") //İnput değeri girildikten sonra içerisini boşalt
    }

    const inputTextHandler = (e) =>{ // İnput içerisi her değiştiğinde bu fonksiyon çalışacak

        setInputText(e.target.value) // İnputun değeri her değiştiğinde state'e atıyoruz
    
    }

   
  return (
    <form>
        <div className="search">
            <input value={inputText} type="text" className="todo-input" placeholder="Add..." onChange={inputTextHandler}/>
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
            <i className="fas fa-plus-circle"></i>
            </button>
        </div>

        <div className="select">
            <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
  )
}

export default Form;

/* input içerisindeki value'yi 
inputText içerisinde tutuyoruz */ 