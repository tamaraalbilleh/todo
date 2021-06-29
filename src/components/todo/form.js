import React from 'react';

import  { Button } from 'react-bootstrap';
import {Form} from  'react-bootstrap'
import useForm from './useForm';
function TodoForm(props) {


  const [handleInputChange , handleSubmit] = useForm(cb);


  function cb (data){
    props.handleSubmit(data);

  }
  

  return (
    <>
    <section style= {{}}>
      <Form onSubmit={handleSubmit} style={{ 'text-align' : 'left'  , 'margin-left' : '100px'  , 'padding': '50px 60px' , 'box-shadow': '0 4px 5px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.12)'}}>
      <h3>Add To Do Item</h3>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>
        <span>To Do Item</span>
        <Form.Control
          name="text"
          placeholder="Add To Do List Item"
            onChange={handleInputChange}
          />
        </Form.Label>
        </Form.Group>

          <Form.Group controlId="formBasicRange">
        <Form.Label>
        <span>Difficulty Rating</span>
        <Form.Control variant="info" defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange}  style={{'color': 'blue' }} />
        </Form.Label>
        </Form.Group>


        <Form.Group controlId="formBasicEmail">
        <Form.Label>
        <span>Assigned To</span>
        <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
        </Form.Label>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
        <Form.Label>
        <span>Due Date</span>
        <Form.Control type="date" name="due"  onChange={handleInputChange} />
        </Form.Label>
        </Form.Group>

        <Button variant="info"  style={{'width': '50%' , 'text-align' : 'center'  , }} type='submit'>Add Item</Button >
      </Form>
      </section>
    </>
  );
  
}

export default TodoForm;