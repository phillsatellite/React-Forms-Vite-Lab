import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const {onItemFormSubmit} = props;
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleNameChange(event){
    setName(event.target.value);
  }

  function handleCategoryChange(event){
    setCategory(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();

    const newItem = {
      id: uuid(),
      name: name,
      category: category
    };
    
    //Call prop to pass item up
    onItemFormSubmit(newItem);

    setName(""); //reset forms
    setCategory("Produce"); //resets state back to default - Produce
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleNameChange} />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;