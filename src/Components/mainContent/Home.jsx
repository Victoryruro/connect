import React from 'react'
import "./style.css"
import Popular from '../popular/Popular'
import Ppost from '../ppost/Ppost'
import Tech from '../tech/Tech'
import Side from '../Sidecontent/side/Side'

const Home = () => {
  return (
    <>  
        <main>  
            <div className="container">
                <section className="maincontent">
                    <Popular />
                    <Ppost />
                    <Tech />
                </section>
                <section className="sidecontent">
                    <Side />
                </section>
            </div>
        </main>

    </>
  )
}

export default Home