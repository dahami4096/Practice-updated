/* import React from 'react' */
import { NavLink } from 'react-router-dom';  // Import NavLink from React Router
import { BiNotification, BiSearch } from 'react-icons/bi'
import { CgProfile } from "react-icons/cg";
import '../content/content.css'

const ContentHeader = () => {
    return (
        <div className='content--header'>
            <NavLink
                to='/'
                className={({ isActive }) => isActive ? 'item active' : 'item'}
            >
                
                <div className='header--title'>Dashboard</div>
            </NavLink>
            
            <div className='header--activity'>
                <div className="search-box">
                    <input type='text' placeholder='Type Here...' />
                    <BiSearch className='icon' />
                </div>
                <div className="notify" >
                    <BiNotification className='icon' />
                </div>

                <NavLink
                    to='/mypage'  // Use 'to' instead of 'href'
                    className={({ isActive }) => isActive ? 'item active' : 'item'}  // Automatically handles 'active' class
                >
                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className='notify'>
                            < CgProfile className='icon' />
                        </div>

                    </div>

                </NavLink>


            </div>
        </div>
    )
}

export default ContentHeader