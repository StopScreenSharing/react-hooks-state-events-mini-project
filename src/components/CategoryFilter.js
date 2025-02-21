import React, {useState} from "react";

function CategoryFilter({categories, onSelectedCategory, onCategoryChange}) {

  const handleCategoryClick = (category) => {
    onCategoryChange(category)
  };


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button   
          key={category}
         onClick={() => handleCategoryClick(category)} 
         className={category === onSelectedCategory ? 'selected' : ''}
         >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
