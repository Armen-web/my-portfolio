import React from 'react';
import '../App.css';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';
function Todos (props){
     return (
        
        <ul  className="TodoList">
           {props.todos.map((todos,index)=>{
               return <Todoitem todos={todos} key={todos.id} index={index} onChange={props.onToggle} />
           })}
        </ul>
    )
}
Todos.propTypes={
    todos:PropTypes.arrayOf(PropTypes.object).isRequired,
    index:PropTypes.number,
    onToggle:PropTypes.func.isRequired
}
export default Todos;