import React from 'react'
import Heading from '../../Heading/Heading'
import Social from '../../Social/SocialMedia'
import './side.css'

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
            </form>
        </section>
    </>
    // The Boy Who Gave the call of my life
  )
}

export default Side