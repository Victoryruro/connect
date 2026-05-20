import React from 'react'
import Heading from '../Heading/Heading'
import {  ppost } from '../../dummyData'
import Slider from "react-slick";
import './Ppost.css'


const Ppost = () => {
   const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };



  return (
    <>
        <section className="popularPost">
            <Heading title='Popular Posts'/>
            <div className="content">
                <Slider {...settings}>
                    {ppost.map((item) => {
                        return (
                            <div className="items">
                                <div className="box shadow">
                                    
                                    <div className="img">
                                        <img src={item.cover} alt={item.title} />
                                    </div>
                                    <div className="category category1">
                                        <span>{item.catgeory}</span>
                                    </div>
                                    

                                    <div className="text ">
                                        <h1 className="title">{item.title.slice(0, 40)}...</h1>
                                        <div className="date">
                                            <i className="far fa-calendar-days"></i>
                                            <label htmlFor=''>{item.date}</label>
                                        </div>

                                    </div>
                                

                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>

        </section>
    </>
  )
}

export default Ppost