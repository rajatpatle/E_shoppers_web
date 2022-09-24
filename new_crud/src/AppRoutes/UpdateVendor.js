import React from 'react'

function UpdateVendor() {
  return (
    <>
    <h1 className='text-primary' >Update Vendor</h1>
            <div className='row col-md-4'>
            <form>
                <div class="mb-3">
                <label  class="form-label">ID</label>
                <input type="text" class="form-control" placeholder="ID"/>
                </div>
                <div class="mb-3">
                <label  class="form-label"> Name</label>
                <input type="text" class="form-control" placeholder="product name "/>
                </div>
                <div class="mb-3">
                <label  class="form-label">Services/Products</label>
                <input type="text" class="form-control" placeholder="qty "/>
                </div>
                <div class="mb-3">
                <label  class="form-label"> Email</label>
                <input type="text" class="form-control" placeholder="amount"/>
                </div>
                <div class="mb-3">
                <label  class="form-label"> Phone</label>
                <input type="text" class="form-control" placeholder="Description"/>
                </div>
                <div class="mb-3">
                <label  class="form-label"> Address</label>
                <input type="text" class="form-control" placeholder="Description"/>
                </div>
                <div class="mb-3">
                <label  class="form-label"> GST NO.</label>
                <input type="text" class="form-control" placeholder="Description"/>
                </div>
                
                <div class="mb-3 text-center">
                <input type="submit" class="btn btn-outline-success" value="Update Vendor"/>
                </div>
            </form>
            </div>
      
    </>
  )
}

export default UpdateVendor
