import React, { useState } from 'react';

const AddCourse = (props) => {

    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        props.add(input)

        setInput('')
    }

    return (
        <div>
            <h3>Ajouter un nouvel item à la liste</h3>

            <form onSubmit={handleSubmit}>

            <input
                placeholder='Nom de la course'
                onChange={handleChange}
                name='text'
                value={input}
              
               
          />
          <button >
            Ajouter
          </button>

            </form>
        </div>
    );
};

export default AddCourse;