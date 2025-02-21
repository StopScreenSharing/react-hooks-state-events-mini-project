import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory]= useState("All");

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  
  const handleDelete = (taskText) => {
    setTasks(tasks.filter(task => task.text !== taskText));
  }
  

  return (
    <div className="App">
      
      <h2>My tasks</h2>
      
      <CategoryFilter 
      categories={CATEGORIES}
      onSelectedCategory={selectedCategory}
      onCategoryChange={handleCategoryChange}
      />
      
      <NewTaskForm 
      categories={CATEGORIES} 
      onTaskFormSubmit={handleTaskFormSubmit} 
      />
      <TaskList 
      tasks={tasks}
      selectedCategory={selectedCategory}
      onDelete={handleDelete}
      />

    </div>
  );
}

export default App;
