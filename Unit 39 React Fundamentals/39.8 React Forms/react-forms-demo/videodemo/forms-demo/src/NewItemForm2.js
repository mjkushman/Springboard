import React, { useState } from "react";

const NewItemForm2 = ({addItem}) => {
  const INITIAL_STATE = {
    name: "",
    qty: 0,
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target; // desctructure name and value from the target
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

const handleSubmit = (e) => {
  e.preventDefault()
  
  addItem(formData)
  setFormData(INITIAL_STATE)
}
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Product</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Item Name"
        value={formData.name}
        onChange={handleChange}
      />

      
      
  
      <label htmlFor="qty">Quantity: {formData.qty}</label>

      <input
        id="qty"
        type="range"
        name="qty"
        min="0"
        max="10"
        value={formData.qty}
        onChange={handleChange}
      />
      
      <button >Add Item</button>
    </form>
  );
};

export default NewItemForm2;
