import React from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import {useState} from 'react';
import {useEffect} from 'react';
import {Badge } from 'react-bootstrap'
import './todo.scss';


function ToDo(props) {
  
const [list , setList] = useState([])


  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList( [...list, item]);
  };

  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let list2 = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(list2);
    }

  };

  useEffect(()=> {
    let list3 = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' ,due : '2021-06-27'},
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A', due : '2021-06-27'},
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B', due : '2021-06-27'},
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' ,due : '2021-06-27'},
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' , due : '2021-06-27'},
    ];

    setList(list3);
  },[])

  const deleteH =(id)=>{
    let list4 = list.filter((item)=>item._id !== id) || {}
    setList (list4)
  }

    const editor = (text , id)=>{
      let item = list.filter ((item)=> item._id === id)[0] || {}
      if (item) {
        item.text = text;
        let list5 = list.map (itm =>{
          if (itm._id === id ){
            return item 
          }else {
            return itm
          }
        })
        setList (list5)
      }
     
     
      }
    
      document.title = `Tasks left : ${list.filter((item) => !item.complete).length}`;

    return (
      <>
        <header>
          <h2>
          There are <Badge variant="secondary">{list.filter(item => !item.complete).length} </Badge> Items To Complete
          </h2>
        </header>

        <section className="todo">

          <div>
            <TodoForm    handleSubmit={addItem} />
          </div>

          <div>
            <TodoList
              list={list}
              handleComplete={toggleComplete}
              deleteH = {deleteH}
              editor = {editor}
            />
          </div>
        </section>
      </>
    );
  
}

export default ToDo;