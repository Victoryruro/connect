import React from 'react'
import './Hero.css'


const Card = ({ item : {id, cover,catgeory, title, authorName, authorImg, time, desc, details} }) => {
  return (
    <>
        <div className="box">
            <div className="img">
                <img loading='lazy' src={cover} alt={title} />
            </div>  
            <div className="text">
                <span className='category'>{catgeory}</span> 
                <h1 className='titleBg'>{title}</h1> 
                <div className="author flexSB">
                    <span>by {authorName}</span>
                    <span>{time}</span>
                   
                </div>
                
            </div> 
        </div>    

    </>
  )
}

export default Card