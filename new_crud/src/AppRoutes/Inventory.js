import React from 'react'
import Button from 'react-bootstrap/Button';

export default function Inventory() {
  return (
  
  <div>
    <br></br>
    <form class="form-inline">
      <input class="form-control mr-sm-2" type="search" placeholder="Product ID/ Product Name" aria-label="Search"/>
      <br></br>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <br></br>
    <h1 className='text-primary'>All Inventory Products</h1>

    <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Product Name</th>
      <th scope="col">Product Image</th>
      <th scope="col">Product Category</th>
      <th scope="col">Product Price</th>
      <th scope="col">Purchased from Vendor </th>
      <th scope="col">Product Stock</th>
      <th scope="col">Units Available</th>
      <th scope="col">Reorder Level</th>
      <th scope="col">GST for Product</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Larry the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
                Print 
              </Button>
        </div>

  </div>
  )
}
