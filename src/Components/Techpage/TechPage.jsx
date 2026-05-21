import React from 'react'
import Tech from '../tech/Tech'
import Side from '../Sidecontent/side/Side'

const TechPage = () => {
  return (
    <>
        <section className="Techpage">
            <div className="container paddingTB">
                <Tech/>  
                <Side/> 
            </div>    
        </section>    
    </>
  )
}

export default TechPage