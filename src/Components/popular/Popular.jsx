import React from 'react'
import Heading from '../Heading/Heading'
import { popular } from '../../dummyData'
import Slider from "react-slick";
import './Popular.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Popular = () => {
    const settings = {

        className: "center",
        centerMode: false,
        infinite: true,
        centerPadding: "",
        slidesToShow:1,
        speed: 500,
        rows: 3,
        slidesPerRow:1,
        dots: false,
        responsive: [
        {
            breakpoint: 800,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
            }
        },

        ]
  };



  return (
    <>
        <section className="popular">
            <Heading title='Popular' />
            <Slider {...settings}>
                {popular.map((item) => {
                    return (
                        <div className="items">
                            <div className="box shadow">
                                <div className="images row">
                                    <div className="img">
                                        <img src={item.cover} alt={item.title} />
                                    </div>
                                    <div className="category category1">
                                        <span>{item.catgeory}</span>
                                    </div>
                                </div>

                                <div className="text row">
                                    <h1 className="title">{item.title.slice(0, 40)}...</h1>
                                    <div className="date">
                                        <i className="far fa-calendar-days"></i>
                                        <label htmlFor=''>{item.date}</label>
                                    </div>
                                    <div className="comment">
                                        <i className="far fa-comments"></i>
                                        <label htmlFor=''>{item.date}</label>
                                    </div>
                                </div>
                               

                            </div>
                        </div>
                    )
                })}
            </Slider>

        </section>
    </>
  )
}

export default Popular