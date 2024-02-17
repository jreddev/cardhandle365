import React, { useState } from "react";
import MemeList from "./MemeList";
import CategoryDropdown from "./CategoryDropdown";
import SubcategoryDropdown from "./SubcategoryDropdown";

const memesData = [
  {
    id: 1,
    category: "Sports",
    subcategory: "Football",
    image:
      "https://i.pinimg.com/736x/74/fc/c4/74fcc4f581f9a3564a477511c741200f.jpg",
  },
  {
    id: 2,
    category: "Sports",
    subcategory: "Tennis",
    image:
      "https://i.pinimg.com/550x/0f/c6/66/0fc6663540c1468a1e29765c5931d16a.jpg",
  },
  {
    id: 3,
    category: "Sports",
    subcategory: "Volleyball",
    image:
      "https://i.pinimg.com/736x/36/13/0f/36130f3ea5d5b57de3060a5707166bf1.jpg",
  },
  {
    id: 4,
    category: "Inspiration",
    subcategory: "Motivational",
    image:
      "https://www.developgoodhabits.com/wp-content/uploads/2023/10/youre_more_than_capable.jpg",
  },
  {
    id: 5,
    category: "Inspiration",
    subcategory: "Popular",
    image:
      "https://www.youthmin.org.nz/sites/default/files/200811-funny-truck-push.jpg",
  },
  {
    id: 6,
    category: "Inspiration",
    subcategory: "Positive",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*K5j48QALLfx3VLNzV5rXpQ.jpeg",
  },
  {
    id: 7,
    category: "Technology",
    subcategory: "Artificial Intelligence",
    image:
      "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0cc9ca6d-a73c-47ff-a1a6-b88b7a0b651b_387x585.jpeg",
  },
  {
    id: 8,
    category: "Technology",
    subcategory: "Programming",
    image:
      "https://www.theinsaneapp.com/wp-content/uploads/2022/04/programming-concepts-infinite-loop-explained.webp",
  },
  {
    id: 9,
    category: "Technology",
    subcategory: "Cybersecurity",
    image:
      "https://i.pinimg.com/564x/32/f5/97/32f59737dfd1f6c085a665cb5c7abff1.jpg",
  },

  // Add more meme objects for other categories and subcategories
];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");

  const filteredMemes = memesData.filter((meme) => {
    return (
      (selectedCategory === "All" || meme.category === selectedCategory) &&
      (selectedSubcategory === "All" ||
        meme.subcategory === selectedSubcategory)
    );
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory("All");
  };

  const handleSubcategoryChange = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  return (
    <div>
      <div
        class="category-dropdowns"
        style={{
          display: "flex",
          //textAlign: "center",
          fontFamily: "cursive",
          //alignItems: "center",
        }}
      >
        <div class="title" style={{ flex: 1, marginLeft: 10}}>
          <h1>Memes</h1>
        </div>
        <div class="category" style={{ flex: 1 }}>
          <CategoryDropdown
            categories={["All", "Sports", "Inspiration", "Technology"]}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>
        <div class="subcategory" style={{ flex: 1 }}>
          {selectedCategory !== "All" && (
            <SubcategoryDropdown
              categories={getSubcategories(selectedCategory)}
              selectedCategory={selectedSubcategory}
              onCategoryChange={handleSubcategoryChange}
            />
          )}
        </div>
      </div>
      <MemeList memes={filteredMemes} />
    </div>
  );
};

const getSubcategories = (category) => {
  // Implement logic to get subcategories based on the selected category
  // For simplicity, returning a static list here
  switch (category) {
    case "Sports":
      return ["All", "Football", "Tennis", "Volleyball"];
    case "Inspiration":
      return ["All", "Motivational", "Popular", "Positive"];
    case "Technology":
      return ["All", "Artificial Intelligence", "Cybersecurity", "Programming"];
    // Add cases for other categories
    default:
      return ["All"];
  }
};

export default App;
