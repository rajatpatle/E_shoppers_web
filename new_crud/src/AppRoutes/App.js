import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { NavLink, Routes, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Display from './Product';
import ErrorPage from './ErrorPage';
import Home from './Home';
import MyService from './MyService';
import User from './Customer';
import Inventory from './Inventory';
import Vendor from './Vendor';
import Report from './Report';
import DashboardPage from '../Shop/Dashboard';
import RegistrationForm from '../auth/RegistrationForm';
import LoginForm from '../auth/LoginForm';
import PasswordResetForm from '../auth/PasswordResetForm';
import UpdateVendor from './UpdateVendor';
import DeleteVendor from './DeleteVendor';
import UpdateInvenotry from './UpdateInvenotry';
import DeleteInventory from './DeleteInventory';


function App() {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="dashboard">E-Shoppers</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item">
                   
                    <NavDropdown title="Home">
                          <NavDropdown.Item>
                            <NavLink to="register" className="me-auto">Register</NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            <NavLink to="login">Employee Login</NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            <NavLink to="login">Admin Login</NavLink>
                          </NavDropdown.Item>
                        </NavDropdown>
                   
                    </li>
                    <li className="nav-item">
                    
                    <NavDropdown title="Employer Login">
                          <NavDropdown.Item>
                            <NavLink to="user" className="me-auto">Inventory</NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            <NavLink to="user">Details</NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            <NavLink to="user">Billing</NavLink>
                          </NavDropdown.Item>
                        </NavDropdown>
                    </li>
                    <li className="nav-item">
                    
                    <NavDropdown title="Invoice">
                          <NavDropdown.Item>
                            <NavLink to="user" className="me-auto">Add Invoice</NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            <NavLink to="user">Print Invoice</NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            <NavLink to="user">Send Invoice</NavLink>
                          </NavDropdown.Item>
                        </NavDropdown>
                    </li>
                    <li className="nav-item">
                  
                    <NavDropdown title="Customer">
                          <NavDropdown.Item>
                            <NavLink to="user" className="me-auto">Add Customer</NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            <NavLink to="user">Update Customer</NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            <NavLink to="user">Delete Customer</NavLink>
                          </NavDropdown.Item>
                        </NavDropdown>
                    </li>
                    <li className="nav-item">
                    
                    <NavDropdown title="Product">
                          <NavDropdown.Item>
                            <NavLink to="user" className="me-auto">Add Product</NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            <NavLink to="user">Update Product</NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            <NavLink to="user">Delete Product</NavLink>
                          </NavDropdown.Item>
                        </NavDropdown>
                    </li>
                    <li className="nav-item">
                    
                    <NavDropdown title="Inventory">
                          <NavDropdown.Item>
                            <NavLink to="inventory" className="me-auto">View Inventory</NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            <NavLink to="update">Update Inventory</NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            <NavLink to="delete">Delete Inventory</NavLink>
                          </NavDropdown.Item>
                        </NavDropdown>
                    </li>
                    <li className="nav-item">
                 
                    <NavDropdown title="Vendor">
                          <NavDropdown.Item>
                            <NavLink to="vendor" className="me-auto">Order from Vendor</NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            <NavLink to="vendor1">Update Vendor</NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            <NavLink to="vendor2">Delete Vendor</NavLink>
                          </NavDropdown.Item>
                        </NavDropdown>
                    </li>
                    <li className="nav-item">
                 
                    <NavDropdown title="Report">
                          <NavDropdown.Item>
                            <NavLink to="report" className="me-auto">Add Report</NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            <NavLink to="report">Update Report</NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            <NavLink to="report">Delete Report</NavLink>
                          </NavDropdown.Item>
                        </NavDropdown>
                    </li>
                </ul>

                </div>
            </div>
        </nav>
             <Routes>
                <Route path='/dashboard' element={<DashboardPage/>}></Route>
                <Route path='/register' element={<RegistrationForm/>}></Route>
                <Route path='/update' element={<UpdateInvenotry/>}></Route>
                <Route path='/delete' element={<DeleteInventory/>}></Route>
                <Route path='/vendor1' element={<UpdateVendor/>}></Route>
                <Route path='/vendor2' element={<DeleteVendor/>}></Route>
                <Route path='/reset' element={<PasswordResetForm/>}></Route>
                <Route path='/login' element={<LoginForm/>}></Route>
                <Route path='/service' element={<MyService/>}></Route>
                <Route path='/user' element={<User/>}></Route>
                <Route path='/display' element={<Display/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/inventory' element={<Inventory/>}></Route>
                <Route path='/vendor' element={<Vendor/>}></Route>
                <Route path='/report' element={<Report/>}></Route>
                <Route path='/' element={<Home/>}></Route>
                <Route path='*' element={<ErrorPage/>}></Route>
             </Routes>
        </>
    );
}

export default App;