import React from "react";
import Task from "./Task"

function TaskList({tasks, selectedCategory, onDelete}) {
  
const filteredTasks = selectedCategory === "All" 
? tasks 
: tasks.filter(task => task.category === selectedCategory);


  return (
   
   <div className="tasks">
      <ul>
      {filteredTasks.map((task) => (
        <Task 
        key={task.text} 
        text={task.text} 
        category={task.category} 
        onDelete={() => onDelete(task.text)}
        />
      ))}
      </ul>
      </div>
    
  );
}


export default TaskList;
