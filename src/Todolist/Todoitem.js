import React, {useContext} from 'react'
import '../App.css';
import { Button,  } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Context from '../Context';
function Todoitem ({todos ,index,onChange}) {
    const {removeToggle}=useContext(Context);
    const classes=[]
    if(todos.completed){
        classes.push('done')
    }

    const classe={
        span:{
            marginRight:"150px",
            marginLeft:"15px",
            color:"blue"
        }

    }
    return (
            <li className="list">
               <input  type="checkbox" id="vehicle1"
               checked={todos.completed} 
               onChange={()=> onChange(todos.id)}
               />
                <span style={classe.span}>{index+1}</span>
                  <strong className={classes.join(' ')}> {todos.title}</strong>
                <Button onClick={()=>removeToggle(todos.id)} className="button" type="submit" size='sm' variant="primary">Delete</Button>
            </li>
    
    )
}

Todoitem.propTypes={
    todo:PropTypes.object,
    index:PropTypes.number,
    onChange:PropTypes.func.isRequired
}

export default Todoitem;