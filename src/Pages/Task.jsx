import React from 'react'
import ImageConvertor from '../Components/ImageConvertor';
import ShowTask from '../Components/ShowTask/ShowTask';
import TaskAdd from '../Components/TaskAdd/TaskAdd';

const Task = () => {
    return (
        <>
          <TaskAdd/>
          <ShowTask/>  
          <ImageConvertor/> 
        </>
    );
};

export default Task;