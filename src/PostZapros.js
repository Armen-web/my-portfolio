import Axios from 'axios'
import React, { Component } from 'react'
class PostZapros extends Component {
    constructor(props){
        super(props)

            this.state={  
              userId:'',
              title:'',
              body:'' ,
              datas:[]  
            }
    }
    onChangeHandler = e =>{
        this.setState({[e.target.name]:e.target.value})
    } 
    submitHandlerr =e=>{
        e.preventDefault('')
        console.log(this.state)
        Axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(Response=>{
            console.log(Response)
            this.setState({datas:Response.data})
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    
    render() {
        const {userId,title,body} =this.state;
        return (
            <div>
                {this.state.datas.map(item=>{
                 return(
                     <div>
                            <div>{item.userId}</div>
                            <div>{item.title}</div>
                            <div>{item.body}</div>
                     </div>
                 )   
                })}
                <div></div>
                <div></div>
                <div></div>
                <form onSubmit={this.submitHandlerr}>
                   <div>
                        <input name="userId" type="text"  value={userId} onChange={this.onChangeHandler}/>
                     </div>
                     <div>
                        <input name="title" type="text"  value={title} onChange={this.onChangeHandler}/>
                     </div>
                     <div>
                        <input name="body" type="text"  vlaue={body} onChange={this.onChangeHandler}/>
                    </div>
                     <button  type="submit">
                         Submit
                     </button>
                </form>
            </div>
        )
    }
}

export default PostZapros
