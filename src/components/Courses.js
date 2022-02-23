import React, { useState } from 'react';
import CoursesList from './CoursesList';
import AddCourse from './AddCourse';

const Courses = () => {

    const [items, setItems] = useState(["Salade", "Cornichons", "Pain", "Lait", "Chips"])

   

    const add = course =>{
        const courses = [course, ...items]
        

        setItems(courses)
    }


    return (
        <div>
            <h1>Liste de courses</h1>

            <CoursesList items={items}  />

            <AddCourse items={items} add={add} />


        </div>
    );
};

export default Courses;