import React from 'react'
import "./style.css"
import Popular from '../popular/Popular'
import Ppost from '../ppost/Ppost'

const Home = () => {
  return (
    <>  
        <main>  
            <div className="container">
                <section className="maincontent">
                    <Popular />
                    <Ppost />
                </section>
                <section className="sidecontent"></section>
            </div>
        </main>

    </>
  )
}

export default Home