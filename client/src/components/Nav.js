import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



const Nav = (props) => {

    // const myStyle = {
    //     height: '75px',
    //     width: '100%',
    //     backgroundColor: 'rgb(43, 43, 43)',
    //     // display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     marginBottom: "50px",
    //     borderBottom: "1px solid black",
    //     color: 'white'
    // };



    return (
        <div className='nav'>
            <div className='navContent'>
                {/* <Link to={'/'}<h1 className='navLogo'>ShoeHub</h1></Link> */}
                <Link className='homeLink' to={'/'}><h1 className='navLogo'>ShoeHub</h1></Link>

                <Link className='addLink' to={'/create/new'}>Add your kicks</Link>
            </div>

        </div>
    )
}

export default Nav;