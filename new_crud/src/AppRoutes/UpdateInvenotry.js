import React from 'react'

function UpdateInvenotry() {
  return (
    <>
      <h1 className='text-primary' >Update Inventory</h1>
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
                <label  class="form-label">Product Image</label>
                <input type="text" class="form-control" placeholder="qty "/>
                </div>
                <div class="mb-3">
                <label  class="form-label"> Product Category</label>
                <input type="text" class="form-control" placeholder="amount"/>
                </div>
                <div class="mb-3">
                <label  class="form-label"> Product Price</label>
                <input type="text" class="form-control" placeholder="Description"/>
                </div>
                <div class="mb-3">
                <label  class="form-label"> Vendor</label>
                <input type="text" class="form-control" placeholder="Description"/>
                </div>
                <div class="mb-3">
                <label  class="form-label"> Product Stock</label>
                <input type="text" class="form-control" placeholder="Description"/>
                </div>
                <div class="mb-3">
                <label  class="form-label"> Product Unit</label>
                <input type="text" class="form-control" placeholder="Description"/>
                </div>
                <div class="mb-3">
                <label  class="form-label"> Reorder Level</label>
                <input type="text" class="form-control" placeholder="Description"/>
                </div>
                <div class="mb-3">
                <label  class="form-label">GST</label>
                <input type="text" class="form-control" placeholder="Description"/>
                </div>
                
                <div class="mb-3 text-center">
                <input type="submit" class="btn btn-outline-success" value="Update Inventory"/>
                </div>
            </form>
            </div>
    </>
  )
}

export default UpdateInvenotry
