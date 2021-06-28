import React from 'react';
import { useState } from 'react';
import If from './if'
import  { Button } from 'react-bootstrap';
import {ListGroup , Form} from  'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
function TodoList(props) {

const [flag , setFlag ] = useState(false);
const [id , setId] = useState ('');




 const toggle = (id) =>{
    setFlag (!flag);
    setId (id)
 }

 const editor =e=>{
   e.preventDefault();
   toggle (id);
   let newUpdate = e.target.text.value
   props.editor (newUpdate , id)
 }

  return (

    <>
    <ListGroup>
      {props.list.map(item => (
      
        <ListGroup.Item action variant={item.complete ? 'dark' : 'light'}
    
  
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >

          <Button variant="outline-danger" onClick={() => props.deleteH(item._id)} value={item._id}>Delete</Button>
          <Button variant="outline-secondary" onClick={()=>toggle(item._id)} value={item._id}>Edit</Button>{' '}
          


          <span onClick={() => props.handleComplete(item._id)}>
            {item.text}  : {item.assignee} ,  difficulty : {item.difficulty} , due : {item.duedate}
          </span>
          </ListGroup.Item>
      ))}
      </ListGroup>

    <If condition={flag}>
      <Form onSubmit= {editor}>

      <Form.Label>
        <span>Edit Task</span>
        <Form.Control type="text" name="text"   />
        </Form.Label>
        <Button variant="outline-secondary" type='submit' >Submit Edit</Button>
        </Form>
    </If>
    </>
  );
}




   

export default TodoList;