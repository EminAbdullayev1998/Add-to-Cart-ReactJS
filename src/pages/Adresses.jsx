import React from 'react'
import resteraunt from '../data/img/resteraunt.jpg'

const Adresses = () => {
  return (
    <>
          <div className='home'>
               <div className='main-box'>
                      <div className='title'>
                            <h1>Restaurants addresses</h1>
                      </div>

                      <div className='photo'>
                             <img src={resteraunt} alt="error" width="100%" height="500px"/>
                      </div>
               </div>
          </div>
    </>
  )
}

export default Adresses