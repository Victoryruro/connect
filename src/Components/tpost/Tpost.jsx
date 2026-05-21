import React from 'react'
import Heading from '../Heading/Heading'
import {  tpost } from '../../dummyData'
import './tpost.css'

const Tpost = () => {
  return (
    <>
        <section className="tpost">
            <Heading title="Tech Post" />
            {tpost.map((item) => {
                return (
                    <div className="box flexSB">
                        <div className="img">
                            <img src={item.cover} alt={item.title} />
                        </div>
                        <div className="text">
                            <h1 className='title'>{item.title.slice(0, 20)}...</h1>
                            <span>A year ago</span>
                        </div>
                    </div>
                    
                )
            })}
        </section>    
    </>
  )
}

export default Tpost