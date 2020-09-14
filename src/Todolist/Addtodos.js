import React,{useState} from 'react';

function Addtodos ({onCreate}){
    const [value,setValue]= useState([]);
    function submitHandler (event){
        event.preventDefault();
        if(value.trim('')){
            onCreate(value)
            setValue('')
        }
    }
   return(
       <form onSubmit={submitHandler}>
           <input 
            value={value}
            onChange={event=>setValue(event.target.value)}
           />
           <button type="submit">Add todos</button>
       </form>
   )

}
export default Addtodos;