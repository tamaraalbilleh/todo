import React, { useContext } from 'react';
import { useState } from 'react';
import If from './if'
import  { Button } from 'react-bootstrap';
import { Form , Badge ,Toast } from  'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SettingsContext } from './setting-context';
import {  Pagination } from  'react-bootstrap';


function TodoList(props) {
  const [flag , setFlag ] = useState(false);
  const [id , setId] = useState ('');
  let list = props.list
  const context = useContext(SettingsContext)
  const maxItems = context.itemPerPage;
  const [currentPage, setCurrentPage] = useState(1);

  if (context.finished){
    list = list.filter((task) => !task.complete);
  }

  
  let numOfPages =list.length / maxItems + 1;
  const last = currentPage * context.itemPerPage;
  const first = last - context.itemPerPage;
  if (context.sortType === 'descending'){
    if (context.sortBy === 'difficulty'){
      list.sort ((a,b)=> {
        if (a.difficulty && b.difficulty){
          if (a.difficulty > b.difficulty) return -1
          else if (a.difficulty < b.difficulty) return 1
          else if (a.difficulty === b.difficulty) return 0
        }
      })
    }
    else if (context.sortBy === 'assignee'){
      list.sort ((a,b)=> {
        if (a.assignee && b.assignee){
          if (a.assignee.toLowerCase()  > b.assignee.toLowerCase() ) return -1
          else if (a.assignee.toLowerCase() < b.assignee.toLowerCase() ) return 1
          else if (a.assignee.toLowerCase()  === b.assignee.toLowerCase() ) return 0
        }
      })
    }
    else if (context.sortBy === 'text'){
      list.sort ((a,b)=> {
        if (a.text && b.text){
          if (a.text.toLowerCase()  > b.text.toLowerCase() ) return -1
          else if (a.text.toLowerCase() < b.text.toLowerCase() ) return 1
          else if (a.text.toLowerCase()  === b.text.toLowerCase() ) return 0
        }
      })
    }
  }
  else if (context.sortType === 'ascending'){
    if (context.sortBy === 'difficulty'){
      list.sort ((a,b)=> {
        if (a.difficulty && b.difficulty){
          if (a.difficulty > b.difficulty) return 1
          else if (a.difficulty < b.difficulty) return -1
          else if (a.difficulty === b.difficulty) return 0
        }
      })
    }
    else if (context.sortBy === 'assignee'){
      list.sort ((a,b)=> {
        if (a.assignee && b.assignee){
          if (a.assignee.toLowerCase()  > b.assignee.toLowerCase() ) return 1
          else if (a.assignee.toLowerCase() < b.assignee.toLowerCase() ) return -1
          else if (a.assignee.toLowerCase()  === b.assignee.toLowerCase() ) return 0
        }
      })
    }
    else if (context.sortBy === 'text'){
      list.sort ((a,b)=> {
        if (a.text && b.text){
          if (a.text.toLowerCase()  > b.text.toLowerCase() ) return 1
          else if (a.text.toLowerCase() < b.text.toLowerCase() ) return -1
          else if (a.text.toLowerCase()  === b.text.toLowerCase() ) return 0
        }
      })
    }
  }
  let currentTasks = list.slice(first, last);
  numOfPages =props.list.length / maxItems + 1;
  context.setTaskSum(list.length);




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


 
 let active = currentPage;
 let items = [];
 for (let number = 1; number <= numOfPages; number++) {
   items.push(<Pagination.Item key={number} active={number === active}> {number} </Pagination.Item>);
 }
 return (
    <React.Fragment>
      {currentTasks
      .map(item => (
        <Toast className={`complete-${item.complete.toString()}`} key={item._id} onClose={() => props.deleteH(item._id)} value={item._id} style={{'text-align': 'center' , 'width' : '50%' , 'margin-left' : '150px' , 'display' : 'block' }} >
          <Toast.Header  style={{ }}>
            <Badge pill variant={item.complete ? 'danger' : 'success'} > {item.complete ? 'completed' : 'pending'} </Badge>{' '}
            <strong className="mr-auto" style={{'margin-left': '20px' }}>{item.assignee}</strong>
          </Toast.Header>
          <Button variant="outline-secondary" onClick={()=>toggle(item._id)} value={item._id} style={{'float' : 'right' , 'margin-right' : '20px'}}>Edit</Button>{' '}
          <Toast.Body onClick={() => props.handleComplete(item._id)}  style={{  minHeight: '80px' , 'width' : '100%' ,'text-align' : 'left' }}  >
            <p>{item.text}</p>
            <small className='float-right' style={{  'margin-top' : '-20px' }} >difficulty : {item.difficulty}</small> 
          </Toast.Body>
        </Toast>
      ))}
      <If condition={flag}>
        <Form onSubmit= {editor}>
          <Form.Label>
          <span  style={{  'width' : '30%'  ,'margin-left' : '180px' }}>Edit Task</span>
          <Form.Control type="text" name="text"  style={{  minHeight: '80px' , 'width' : '30%' ,'margin-left' : '180px'  }} />
          </Form.Label>
          <Button variant="outline-secondary" type='submit' style={{  'width' : '30%'  ,'margin-left' : '180px' }} >Submit Edit</Button>
        </Form>
      </If>
      <Pagination size="sm" >
        <Pagination.Prev size="sm" disabled={active === 1 ? true : false} onClick={() => { setCurrentPage(currentPage - 1); }} />
          {items}
        <Pagination.Next  size="sm" disabled={active > numOfPages - 1 ? true : false} onClick={() => {setCurrentPage(currentPage + 1); }} />
      </Pagination>
    </React.Fragment>
    
  );
}




   

export default TodoList;