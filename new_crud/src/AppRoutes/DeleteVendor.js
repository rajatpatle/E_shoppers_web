import React from 'react'

function DeleteVendor() {
  return (
    <>
      <h1 className='text-primary' >Delete Vendor</h1>
            <div className='row col-md-4'>
            <form>
                <div class="mb-3">
                <label  class="form-label">Vendor ID</label>
                <input type="text" class="form-control" placeholder="ID"/>
                </div>
                <div class="mb-3">
                <label  class="form-label">Vendor Name</label>
                <input type="text" class="form-control" placeholder="name"/>
                </div>
                
                <div class="mb-3 text-center">
                <input type="button" class="btn btn-outline-success" value="Delete Vendor"/>
                </div>
            </form>
            </div>
      
    </>
  )
}

export default DeleteVendor
