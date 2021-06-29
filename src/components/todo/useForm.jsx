import { useState } from 'react';

const useForm = (cb) => {
    const [item,setItem] = useState ({})

    const handleInputChange = e => {
        setItem( {...item, [e.target.name]: e.target.value } );
       };

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        cb(item);
      };

    return [handleInputChange , handleSubmit]
}

export default useForm;
