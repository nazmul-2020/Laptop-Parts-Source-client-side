import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h1 className='text-4xl text-green-500 text-center pb-2 '>We Come To Dashboard</h1>
                    <Outlet></Outlet>

                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
                        
                        <li><NavLink to="/dashboard">My Profile</NavLink></li>
                       {!admin &&<> 
                           <li><NavLink to="/dashboard/myOrders">My Orders</NavLink></li>
                           <li><NavLink to="/dashboard/addReview">Add Review</NavLink></li>
                           </>
                       }

                        {admin && <>
                            <li><NavLink to="/dashboard/manageOrder">Manage All Order</NavLink></li>
                            <li><NavLink to="/dashboard/addProduct">Add a Product</NavLink></li>
                            <li><NavLink to="/dashboard/makeAdmin">Make Admin</NavLink></li>
                            <li><NavLink to="/dashboard/manageProducts">Manage Products</NavLink></li>
                        </>
                        }
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;