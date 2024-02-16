import React from "react";

const CategoryDropdown = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div>
      <label>Category: </label>
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDropdown;
