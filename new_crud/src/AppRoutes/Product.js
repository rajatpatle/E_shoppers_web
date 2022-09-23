import React from 'react';


function Product() {
    return (
        <>
            <h1 className='text-primary'>Add Product </h1>
            <div className='row col-md-4'>
            <form>
                <div class="mb-3">
                <label  class="form-label">Product ID</label>
                <input type="text" class="form-control" placeholder="ID"/>
                </div>
                <div class="mb-3">
                <label  class="form-label">Product Name</label>
                <input type="text" class="form-control" placeholder="product name "/>
                </div>
                <div class="mb-3">
                <label  class="form-label">Product Quantity</label>
                <input type="text" class="form-control" placeholder="qty "/>
                </div>
                <div class="mb-3">
                <label  class="form-label">Amount</label>
                <input type="text" class="form-control" placeholder="amount"/>
                </div>
                <div class="mb-3">
                <label  class="form-label">Description</label>
                <input type="text" class="form-control" placeholder="Description"/>
                </div>
                
                <div class="mb-3 text-center">
                <input type="submit" class="btn btn-outline-success" value="Add Product"/>
                </div>
            </form>
            </div>
        </>
    );
}

export default Product;