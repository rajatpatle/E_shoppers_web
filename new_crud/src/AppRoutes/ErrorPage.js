import React from 'react';
import { NavLink } from 'react-router-dom';
import pic from '../images/404.jpg';



function ErrorPage() {
    return (<>
                <div className='text-center'>
                    <img src={pic} alt='ErrorPic'/>
                    <br></br>

                    <NavLink>
                        <button>Go To Home</button>
                    </NavLink>
                </div>
        </>
    );
}

export default ErrorPage;