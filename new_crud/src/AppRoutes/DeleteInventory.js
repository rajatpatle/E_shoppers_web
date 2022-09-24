import React from 'react'

function DeleteInventory() {
  return (
    <>
       <h1 className='text-primary' >Delete Inventory</h1>
            <div className='row col-md-4'>
            <form>
                <div class="mb-3">
                <label  class="form-label">Delete by Product ID</label>
                <input type="text" class="form-control" placeholder="Product ID"/>
                </div>
                <div class="mb-3">
                <label  class="form-label">Delete by Product Name</label>
                <input type="text" class="form-control" placeholder="product name "/>
                </div>
                <div class="mb-3 text-center">
                <input type="button" class="btn btn-outline-warning" value="Delete Inventory"/>
                </div>
               
               
            </form>
            </div>
    </>
  )
}

export default DeleteInventory
