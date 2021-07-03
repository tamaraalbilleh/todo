  
import React , {useContext}from 'react';
import Header from './components/todo/header'
import ToDo from './components/todo/todo-connected.js';
import If from './components/todo/if.jsx'
import { AuthContext } from './components/todo/auth-context';
export default function App () {
 const context  = useContext(AuthContext);
    return (
      <>
        <Header/>
        <If condition={context.loggedIn}>
          <ToDo />
        </If>
      </>
    );
  
}