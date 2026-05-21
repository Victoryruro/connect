import React from 'react'
import Heading from '../../Heading/Heading'
import Social from '../../Social/SocialMedia'
import './side.css'
// import { tpost } from '../../../dummyData'
import banner from "..//..//..//image/connectlogo.jpg"
import Tpost from '../../tpost/Tpost'

const Side = () => {
  return (
    <>
        <Heading title='Stay Informed' />
        <Social />
        <Heading title='Newsletter' />
        <section className="subscribe">
            <h1 className='title'>Subscribe to Our Newsletter & Stories</h1>
            <form action="">
                <input type="text" placeholder='Email Address...' />
                <button>
                    <i className="fas fa-paper-plane"></i>SUBMIT
                </button>
            </form>
        </section>
        <section className="banner">  
            <img width="100%" height={400}  src={banner} alt="" />  
        </section>
        <Tpost/>
    </>
    // The Boy Who Gave the call of my life
  )
}

export default Side