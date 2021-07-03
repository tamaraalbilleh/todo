import React, { useContext } from "react";
import { AuthContext } from "./auth-context";
import {Button  , Form , Col} from 'react-bootstrap';
import If from './if.jsx';
function SignIn (){
const context  = useContext(AuthContext);
const submitHandler = e =>{
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    context.signIn (username , password)
}
const logOutHandler =e =>{
        
    context.signOut()
}
    return (
    <>
        <If condition={!context.loggedIn}>
        <aside>
        <Form onSubmit={submitHandler} style={{'float' : 'right' }}>
        <Form.Row>
        <Col>
          <Form.Control name="username" placeholder="username" type="text"/>
          </Col>
          <Col>
          <Form.Control name="password" placeholder="password" type="password"/>
          </Col>
          <Button variant="dark" type="submit">Sign In</Button>
          </Form.Row>
        </Form>
        </aside>
        </If>
        <If condition={context.loggedIn}>
        <Button variant="danger" onClick={logOutHandler}>Log Out</Button>
        </If>
       
    </>
    )


}
export default SignIn