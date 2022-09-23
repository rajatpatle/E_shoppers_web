import React from 'react';

function Customer() {
    return (
        <>
            <h1 className='text-primary'>Add Customer</h1>
            <div className='row col-md-4'>
            <form>
                <div class="mb-3">
                <label  class="form-label">Customer name</label>
                <input type="text" class="form-control" placeholder="name"/>
                </div>
                <div class="mb-3">
                <label  class="form-label">Customer Phone</label>
                <input type="text" class="form-control" placeholder="phone "/>
                </div>
                <div class="mb-3">
                <label  class="form-label">Customer Email</label>
                <input type="text" class="form-control" placeholder="email "/>
                </div>
                <div class="mb-3">
                <label  class="form-label">Mode of Payment</label>
                <input type="text" class="form-control" placeholder="Cash/Card/Upi"/>
                </div>
                
                <div class="mb-3 text-center">
                <input type="submit" class="btn btn-outline-success" value="Add Customer"/>
                </div>
            </form>
            </div>
        </>
    );
}

export default Customer;