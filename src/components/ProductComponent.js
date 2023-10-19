import React, { useState } from "react";

function ProductComponent() {
    const [productFormData, setProductFormData] = useState({name: "", description: "", category: "", quantity: "", price: ""});
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setProductFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Name: ${productFormData.name}, Description: ${productFormData.description}, Category: ${productFormData.Category}, Quantity: ${productFormData.Quantity}, Price: ${productFormData.price}`
      );
    };
  
    return (
        <div class="text-center">
            <form onSubmit={handleSubmit} className="mb-3">  
                <h2>New Product</h2>
                <div class="row">
                <div class="col-lg-6 offset-3">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" class="form-control" value={productFormData.name} onChange={handleChange}/>
                </div>
                </div>
                
                <br/>
                <div class="row">
                    <div class="col-lg-6 offset-3">
                        <label htmlFor="descr">Description:</label>
                    <input type="text" id="description" name="description" class="form-control" value={productFormData.description} onChange={handleChange}/>
                    </div>
                </div>
                
                <br/>
                <div>
                    <div class="col-lg-6 offset-3">
                    <label htmlFor="descr">Category:</label>
                    <input type="text" id="category" name="category" class="form-control" value={productFormData.category} onChange={handleChange}/>
                    </div>
                </div>
                
                <br/>
                <div>
                    <div class="col-lg-6 offset-3">
                        <label htmlFor="descr">Quantity:</label>
                        <input type="number" id="description" name="quantity" class="form-control" value={productFormData.quantity} onChange={handleChange}/>
                    </div>
                </div>
                
                <br/>
                <div>
                    <div class="col-lg-6 offset-3">
                        <label htmlFor="descr">Price:</label>
                        <input type="number" id="description" name="price" class="form-control" value={productFormData.price} onChange={handleChange}/>
                    </div>

                </div>
                
                <button type="submit" class="btn btn-primary m-2">Submit</button>
                <button type="cancel" class="btn btn-secondary">Cancel</button>
            </form>
        </div>
    );
    
}
export default ProductComponent;