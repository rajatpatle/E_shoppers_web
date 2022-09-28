import React from 'react'

export default function AddVendor() {
  return (
    <>
       <h1 className='text-primary' >Add Vendor</h1>
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
                <label  class="form-label">Services/Products</label>
                <input type="text" class="form-control" placeholder="qty "/>
                </div>
                <div class="mb-3">
                <label  class="form-label">Vendor Email</label>
                <input type="text" class="form-control" placeholder="amount"/>
                </div>
                <div class="mb-3">
                <label  class="form-label">Vendor Phone</label>
                <input type="text" class="form-control" placeholder="Description"/>
                </div>
                <div class="mb-3">
                <label  class="form-label">Vendor Address</label>
                <input type="text" class="form-control" placeholder="Description"/>
                </div>
                <div class="mb-3">
                <label  class="form-label">Vendor GST NO.</label>
                <input type="text" class="form-control" placeholder="Description"/>
                </div>
                
                <div class="mb-3 text-center">
                <input type="submit" class="btn btn-outline-success" value="Add Vendor"/>
                </div>
            </form>
            </div>
    </>
  )
}
