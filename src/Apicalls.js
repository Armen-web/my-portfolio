import React from 'react';
import './App.css';
import axios from 'axios';
import {Card,ListGroup} from 'react-bootstrap';
class Apicalls extends React.Component{
    constructor(props){
        super(props)
        this.state={
            posts:[],
            postsOne:[],
            erroeMsg:"API recuests not succses"
        }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(Response=>{
            this.setState({posts:Response.data})
        })
        .catch(error=>{console.log(this.state.erroeMsg)})
    
    }
    render(){
        const {posts} = this.state;
        return(
            <div className="App">
                {
                    posts.length?
                    posts.map((item,index)=>{
                        return(
                            
                                <Card key={index} style={{ width: '18rem' }}>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item >{item.id}</ListGroup.Item>
                                        <ListGroup.Item>{item.title}</ListGroup.Item>
                                        <ListGroup.Item>{item.body}</ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            
                        )
                    })
                 :null
                } 
                  
            </div>
        )
    }
}

export default Apicalls;