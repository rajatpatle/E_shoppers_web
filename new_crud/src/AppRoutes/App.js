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


function App() {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="home">E-Shoppers</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item">
                    <NavLink to="home"  className="nav-link" >Cashier Login</NavLink>
                    <NavDropdown.Item>
                            <NavLink to="customerOrders" className="me-auto">
                              Order
                            </NavLink>
                    </NavDropdown.Item>
                    </li>
                    <li className="nav-item">
                    <NavLink to="home"  className="nav-link" >Employeer Login</NavLink>
                    <NavDropdown title="Customer">
                          <NavDropdown.Item>
                            <NavLink to="customerOrders" className="me-auto">
                              Order
                            </NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <NavLink to="customerDetails">Details</NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>
                            <NavLink to="customerBilling">Billing</NavLink>
                          </NavDropdown.Item>
                        </NavDropdown>
                    </li>
                    <li className="nav-item">
                    <NavLink to='service' className="nav-link" >Invoice</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='user' className="nav-link"  >Customer</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='display' className="nav-link"  >Product</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='inventory' className="nav-link"  >Inventory</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='vendor' className="nav-link"  >Vendor</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='report' className="nav-link"  >Report</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
             <Routes>
                <Route path='/home' element={<Home/>}></Route>
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