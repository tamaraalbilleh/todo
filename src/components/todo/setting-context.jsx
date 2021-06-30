import React , {useState} from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = (props) =>{

    const [itemPerPage , setItemPerPage] = useState (4);
    const [taskSum, setTaskSum] = useState(0);
    const [finished , setFinished] = useState (false);
    const [sortBy , setSortBy] = useState ('');
    const [sortType , setSortType]  =useState('ascending')

    function toggle () {
        setFinished (finished=> !finished)
    }

    const setting = {
        itemPerPage,
        setItemPerPage,
        
        taskSum,
        setTaskSum,

        finished,
        setFinished,

        toggle,

        sortBy,
        setSortBy,

        sortType,
        setSortType
    }
    return (
        <SettingsContext.Provider value={setting}>

            {props.children}
        </SettingsContext.Provider>
    )

}

export default SettingsProvider;
