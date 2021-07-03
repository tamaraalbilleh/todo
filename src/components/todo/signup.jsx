import React, { useContext } from 'react';
import {AuthContext} from './auth-context';
import { Modal , Button , Form} from 'react-bootstrap';
import If from './if.jsx';
function Register (){
    const context = useContext (AuthContext);


     const submitHandler = e =>{
        e.preventDefault();
        let user = {
            username : e.target.username.value,
            password : e.target.password.value,
            role : e.target.role.value || 'user',
        }
        context.signUp ( user.username , user.password , user.role)
    }

    return (


<>
<If condition={!context.loggedIn}>
    <Modal show={context.show} onHide={context.handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>


            <Form onSubmit={submitHandler}>
                <Modal.Body>

                    <Form.Label>User Name</Form.Label>
                    <Form.Control type='text' name='username' placeholder="please enter a unique username"/>

                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="email should have a @ symbol in it"/>

                    <Form.Label>PassWord</Form.Label>
                    <Form.Control type="password" name='password' placeholder="please Enter a strong password"/>

                    <Form.Label>Role</Form.Label>
                    <Form.Control as="select" name="role" >
                        <option value="user" >User</option>
                        <option value="editor" >editor</option>
                        <option value="admin" >Admin</option>
                    </Form.Control >

                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" type="submit" onClick={context.handleClose}>Sign Up</Button>

                </Modal.Footer>
            </Form>
    </Modal>


</If>
            
            
</>
    )
}

export default Register;