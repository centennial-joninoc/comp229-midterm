import React, { useState } from "react";

function ShopComponent() {
  const [shopFormData, setShopFormData] = useState({name: "", description: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setShopFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${shopFormData.name}, Description: ${shopFormData.description}`
    );
  };

  return (
    <div class="text-center">
            <form onSubmit={handleSubmit} className="mb-3">  
            <h2 >New Shop</h2>
            <div class="row">
                <div class="col-lg-6 offset-3">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" class="form-control" value={shopFormData.name} onChange={handleChange}/>
                </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-lg-6 offset-3">
                        <label htmlFor="descr">Description:</label>
                    <input type="text" id="description" name="description" class="form-control" value={shopFormData.description} onChange={handleChange}/>
                    </div>
                </div>
            
            <button type="submit" class="btn btn-primary m-2">Submit</button>
            <button type="cancel" class="btn btn-secondary">Cancel</button>
        </form>
    </div>

  );
  
}

export default ShopComponent;