import React, { useState } from 'react';
import AddCourse from './AddCourse';


const CoursesList = (props) => {

    const [checked, setChecked] = useState([false, false, false, false, false])


    const handleChange = (i) => {

        setChecked([...checked.map( (check, index) => index === i ? check = !check : check )])
        
    }


    return (

        <>
        {props.items.map((item,index) => (
            <div key={index}>
                <label>
                    <input 
                    type="checkbox"
                    checked={checked[index]}
                    onChange={()=> handleChange(index)} 
                    />
                    <span className= {checked[index] === true? 'line' : ''}>
                        {item}
                    </span>
                     
                </label>
            </div>
    ))}
        
        </> 
    )


};

export default CoursesList;