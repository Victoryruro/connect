import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <footer> 
        <div className="container">
            <div className="box logo">
                <img width="120px" src="https://thumbs.dreamstime.com/b/man-take-paper-text-tech-news-shirt-office-background-192998971.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Ullam autem beatae praesentium facilis <br /> cumque vero, exercitationem velit ut dolore? Labore, impedit.</p>

                <i className="fa fa-envelope"></i>
                <span>hello.ng.com </span>
                <i className="fa fa-phone"></i>
                <span>+234 81559908</span>

            </div>    
        </div> 
      </footer>
      <div className="legal">
        <div className="container flexSB">
            <p>&copy; SideProject</p>
            <p>
                <a href="https://github.com/Victoryruro" target="_blank" rel="noopener noreferrer">
                    By <i className="fa fa-user" ></i> 
                    <span>Vicruro</span>
                </a>
            </p> 

        </div>
      </div>
    </>
  )
}

export default Footer