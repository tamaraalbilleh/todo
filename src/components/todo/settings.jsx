import React , {useContext} from 'react';
import {SettingsContext} from './setting-context';
import {Button} from 'react-bootstrap';
const ContentSetting = (props) =>{
    const context   = useContext (SettingsContext)

    const itemPerPageHandler = e =>{
        context.setItemPerPage (parseInt (e.target.value))
    }
    return (
        <React.Fragment>
            <h2>Settings</h2>
            <form>
            

            <Button variant="info"  style={{'width': '50%' , 'text-align' : 'center'  , }} onClick={context.toggle} >Click to hide Completed</Button >

        
            <label name="itemPerPage"> Items per page </label>
            <input type="number" id="itemPerPage" name="itemPerPage" onChange={itemPerPageHandler}/><br/>
        
            </form>
        </React.Fragment>
    )
}

export default ContentSetting;
