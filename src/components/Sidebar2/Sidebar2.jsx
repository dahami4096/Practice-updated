import React from 'react'
import './sidebar2.css'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { MdHeight } from 'react-icons/md'


const Sidebar2 = () => {
    return (
        <div className='side2-nav'>
            <Nav>
                <NavIcon to='#' >
                    <FaIcons.FaBars />
                </NavIcon>
            </Nav>
        </div>
    )
}

export default Sidebar2