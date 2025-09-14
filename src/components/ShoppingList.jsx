import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({items: initialItems}) {  //rename prop to initialItems
  const [items, setItems] = useState(initialItems || []); //make it state
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  //State updater for search text
  function handleSearchChange(newText) {
    setSearchText(newText);
  }
  
  //Filter items by category and by search text
  const itemsToDisplay = items.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={(newItem) => setItems([...items, newItem])}/>
      {/* Search input */}
      <input 
      type="text"
      value={searchText}
      onChange={(e) => handleSearchChange(e.target.value)}
      />
      <Filter search={searchText} onSearchChange={handleSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;