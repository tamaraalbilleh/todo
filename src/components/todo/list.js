import React from 'react';
import { useState } from 'react';
import If from './if'
import  { Button } from 'react-bootstrap';
import { Form , Badge ,Toast} from  'react-bootstrap'
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
    
      {props.list.map(item => (
      

        <Toast 
         className={`complete-${item.complete.toString()}`}
          key={item._id}
          onClose={() => props.deleteH(item._id)} value={item._id}
          style={{'text-align': 'center' , 'width' : '100%' , 'margin-left' : '250px' , 'display' : 'block' }}
        >
        <Toast.Header  style={{ }}>
        <Badge pill variant={item.complete ? 'danger' : 'success'} > {item.complete ? 'completed' : 'pending'} </Badge>{' '}
        <strong className="mr-auto" style={{'margin-left': '20px' }}>{item.assignee}</strong>
        
        
        </Toast.Header>
         
          {/* <Button variant="outline-secondary" onClick={()=>toggle(item._id)} value={item._id}>Edit</Button>{' '} */}
          

          <Toast.Body onClick={() => props.handleComplete(item._id)}  style={{  minHeight: '80px' , 'width' : '100%' ,'text-align' : 'left' }}  >
          <p>{item.text}</p>
          
           <small className='float-right'>difficulty : {item.difficulty}</small> 
           </Toast.Body>
          
          </Toast>
      ))}
      

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