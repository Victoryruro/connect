import React from 'react'
import "./Tech.css"
import { popular } from '../../dummyData';
import Heading from '../Heading/Heading'
import Slider from "react-slick";

const Tech = () => {
      const settings = {

        className: "center",
        centerMode: false,
        infinite: true,
        centerPadding: "",
        slidesToShow: 1,
        speed: 500,
        rows: 1,
        slidesPerRow:1,
        dots: true,

  };  
  return (
    <>
        <section className="tech">
            <Heading title='Tech News' />
            <div className="content">
                <Slider {...settings}>
                    {popular.filter((item) => item.catgeory === "technology" || item.catgeory === "sports")    
                    .map((item) => {
                        return (
                            <div className="items">
                                <div className="box shadow flexSB">
                                    <div className="images row">
                                        <div className="img">
                                            <img src={item.cover} alt={item.title} />
                                        </div>
                                        <div className="category category1">
                                            <span>{item.catgeory}</span>
                                        </div>
                                    </div>

                                    <div className="text ">
                                        <h1 className="title">{item.title.slice(0, 40)}...</h1>
                                        <div className="date">
                                            <i className="far fa-calendar-days"></i>
                                            <label htmlFor=''>{item.date}</label>
                                        </div>
                                        <p className='desc'>
                                            {item.desc.slice(0, 200)}...
                                        </p>
                                        <div className="comment">
                                            <i className="fa fa-share"></i>
                                            <label htmlFor=''>Share /</label>
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
            </div>

        </section>
    </>
  )
}

export default Tech