import React from 'react'
import Side from '../Sidecontent/side/Side'
import Ppost from '../ppost/Ppost'

const Fashion = () => {
  return (
    <>
        <section className="Fashion">
            <div className="container paddingTB">
                <Ppost title="Fashion" />  
                <Side/> 
            </div>    
        </section>    
    </>
  )
}

export default Fashion