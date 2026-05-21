import React, { useState } from 'react'
import Head from './Head'
import '../../App.css'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  const  [navbar, setnavbar] = useState(false) 
  return (
    <>
        <Head />
        <header>
            <div className="container paddingSmall">
                <nav>
                    <ul className={navbar? "navbar": "flex"} onClick={() => setnavbar(false)}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Fashion">Fashion</Link></li>
                        <li><Link to="/TechPage">Tech</Link></li>
                        <li><Link to="/music">Music</Link></li>
                        <li><Link to="/review">Reviews</Link></li>

                    </ul>
                    <button className="barIco" onClick={() => setnavbar (!navbar)}>
                        {navbar? <i className="fas fa-times"></i>: <i className="fas fa-bars"></i>}
                    </button>
                </nav>
            </div>
        </header>
    </>
  )
}

export default Header