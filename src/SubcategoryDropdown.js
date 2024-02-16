import React from "react";

const SubcategoryDropdown = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div>
      <label>Subcategory: </label>
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

export default SubcategoryDropdown;
