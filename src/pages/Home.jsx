import React from 'react'
import home from '../data/img/home.jpg'

const Home = () => {
  return (
     <>
        <div className='home'>
               <div className='main-box'>
                      <div className='title'>
                            <h1>About Our Food</h1>
                      </div>

                      <div className='photo'>
                             <img src={home} alt="error" width="100%" height="500px"/>
                      </div>
               </div>
        </div>
     </>
  )
}

export default Home