import React from 'react';
import { useState } from 'react';
import If from './if'

function TodoList(props) {

const [flag , setFlag ] = useState(false);
const [id , setId] = useState ('');


const deleteH = e =>{
  e.preventDefault();
  let id = e.target.value;
  props.deleteHandle (id)
  console.log (deleteH())
}

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
    <ul>
      {props.list.map(item => (
        <li
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <button onClick={() => props.deleteH(item._id)} value={item._id}>X</button>
          <button onClick={()=>toggle(item._id)} value={item._id}>Edit</button>
          <span onClick={() => props.handleComplete(item._id)}>
            {item.text}  : {item.assignee} ,  difficulty : {item.difficulty} , due : {item.duedate}
          </span>
        </li>
      ))}
    </ul>

    <If condition={flag}>
        <form onSubmit= {editor}>
        <label>
        <span>Edit Task</span>
        <input type="text" name="text"   />
        </label>
        <button type='submit' >Submit Edit</button>
        </form>
    </If>
    </>
  );
}




   

export default TodoList;