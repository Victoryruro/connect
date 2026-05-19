import React from 'react'
import './Header.css'
import subLogo from '../../image/sublogo.jpg'

const Head = () => {
  return (
    <>
        <section className="head">
            <div className="container flexSB paddingTB">
                <div className="logo ">
                    <img width="200" src="https://euphonious-hotteok-b19557.netlify.app/images/logo.png" alt="logo" />
                    <img  src={subLogo} alt="logo" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Head