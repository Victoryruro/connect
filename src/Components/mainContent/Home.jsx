import React from 'react'
import "./style.css"
import Popular from '../popular/Popular'

const Home = () => {
  return (
    <>  
        <main>  
            <div className="container">
                <section className="maincontent">
                    <Popular />
                </section>
                <section className="sidecontent"></section>
            </div>
        </main>

    </>
  )
}

export default Home