import React from 'react';
import './App.css';
import Todos from './Todolist/Todos';
import Context from './Context';
import AddTodos from '../src/Todolist/Addtodos';
import Apicalls from './Apicalls';
import PostZapros from './PostZapros';
function App () { 

    const [todos ,setTodos]=React.useState([
        {id:1,completed:false,title:"apranq arajin"},
        {id:2,completed:false,title:"apranq erkrord"},
        {id:3,completed:false,title:"apranq errord"}
    ])

    function toggleTodo(id){
        setTodos(
            todos.map((item,key)=>{
                if(item.id===id){
                    key={key}
                    item.completed=!item.completed;
                }
                return item
            })
        )
    };
    function removeToggle(id){
        
           setTodos(todos.filter(item => item.id !== id))
          
    }
    function AddTodo(title){
        console.log(title)
        setTodos(
            todos.concat([{
                title,
                id:Date.now(),
                completed:false
            }])
        )
    }
    return (
        <Context.Provider value={{removeToggle}}>
              
            <div className="App">
                <h1>Todo List</h1>
                <AddTodos onCreate={AddTodo}/>
                {todos.length?<Todos todos={todos} onToggle={toggleTodo}/>:'produkt chka!!!!!! '}
                <PostZapros/>
                <Apicalls/>
            </div>
        </Context.Provider> 
    );  
      
}
export default App;