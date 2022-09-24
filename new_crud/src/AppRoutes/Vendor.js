import React from 'react'

export default function Vendor() {
  return (
    <>
         <h1 className='text-primary' >Place Order to Vendor </h1>
            <div className='row col-md-4'>
            <form>
                <div class="mb-3">
                <label  class="form-label">Vendor ID</label>
                <input type="text" class="form-control" placeholder="ID"/>
                </div>
                <div class="mb-3">
                <label  class="form-label">Vendor Name</label>
                <input type="text" class="form-control" placeholder="product name "/>
                </div>
                <div class="mb-3">
                <label  class="form-label">Product Quantity</label>
                <input type="text" class="form-control" placeholder="qty "/>
                </div>
                <div class="mb-3">
                <label  class="form-label">Product Name</label>
                <input type="text" class="form-control" placeholder="amount"/>
                </div>
                <div class="mb-3">
                <label  class="form-label">Description</label>
                <input type="text" class="form-control" placeholder="Description"/>
                </div>
                
                <div class="mb-3 text-center">
                <input type="submit" class="btn btn-outline-success" value="Place Order"/>
                </div>
            </form>
            </div>
    </>
  )
}
