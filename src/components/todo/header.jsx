import React , {useContext} from 'react';
import {Navbar ,Nav} from 'react-bootstrap'
import Register from './signup.jsx';
import SignIn from './signin.jsx';
import { Switch, Route} from "react-router-dom";
import { AuthContext } from './auth-context.jsx';
import If from './if.jsx'
function Header(props) {
    const context  = useContext(AuthContext);
  

    return (
        <>
            <Navbar bg="primary" variant="dark" style={{'padding': '20px' }} >
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <SignIn />
                    <If condition={!context.loggedIn}>
                        <Nav.Link href="/signup" onClick={context.handleShow}>Register</Nav.Link>
                        <Switch>
                            <Route exact path="/">
                                <Register />
                            </Route>
                        </Switch>
                    </If>
                
                </Nav>
            </Navbar>
        </>
    )
}
export default Header;