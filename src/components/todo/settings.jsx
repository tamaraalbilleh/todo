import React , {useContext} from 'react';
import {SettingsContext} from './setting-context';
import {Button  , Form} from 'react-bootstrap';
const ContentSetting = (props) =>{
    const context   = useContext (SettingsContext)
    const itemPerPageHandler = e =>{
        context.setItemPerPage (parseInt (e.target.value))
    }
    const sortByHandler = e =>{
        context.setSortBy(e.target.value.toString())
    }
    const sortByTypeHandler = e =>{
        context.setSortType (e.target.value.toString())
    }
    return (
        <React.Fragment>
            <h2>Settings</h2>
            <Form>
                <Button variant="info"  style={{'width': '100%' , 'text-align' : 'center'  , }} onClick={context.toggle} >{context.finished? 'show all Tasks': 'hide Completed Tasks'}</Button >
                <Form.Label name="Sort By"> Sort Tasks By : 
                <select name="Sort By" title="Sort By" onChange={sortByHandler}>
                    <option value="difficulty" >difficulty</option>
                    <option value="assignee" >assignee</option>
                    <option value="text" >text</option>
                </select>
                <select name="Sort By Type"  onChange={sortByTypeHandler}>
                    <option value="ascending" >ascending</option>
                    <option value="descending" >descending</option>
                </select>
                </Form.Label>
                <Form.Label name="itemPerPage">
                    <span>Items per page</span>
                    <Form.Control type="number" id="itemPerPage" name="itemPerPage" onChange={itemPerPageHandler} />
                </Form.Label>
            </Form>
        </React.Fragment>
    )
}

export default ContentSetting;
