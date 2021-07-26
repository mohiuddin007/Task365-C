import React from 'react';
import ShowTask from '../Components/ShowTask/ShowTask';
import TaskAdd from '../Components/TaskAdd/TaskAdd';

const Task = () => {
    return (
        <>
          <TaskAdd/>
          <ShowTask/>   
        </>
    );
};

export default Task;