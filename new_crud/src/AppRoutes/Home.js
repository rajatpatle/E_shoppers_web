import React from 'react';

function Home() {
    return (
        <>
            <h1 className='text-primary'>Cashier Login</h1>
            <div className='row col-md-4'>
            <form>
                <div class="mb-3">
                <label  class="form-label">Username</label>
                <input type="text" class="form-control" placeholder="username"/>
                </div>
                <div class="mb-3">
                <label  class="form-label">Password</label>
                <input type="text" class="form-control" placeholder="password "/>
                </div>
               
                
                <div class="mb-3 text-center">
                <input type="submit" class="btn btn-outline-success" value="Login"/>
                </div>
            </form>
            </div>
        </>
    );
}

export default Home;