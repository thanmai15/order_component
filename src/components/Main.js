import React from 'react'
import hero from '../images/illustration-hero.svg'
import music from '../images/icon-music.svg'
import '../CSS/main.css'
function Main() {
  return (
    <div>
        <div className='card'>
            <img src={hero} className = 'hero-img' alt="" />
            <div className='order-summary'> Order Summary</div>
            <p className = 'description'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
            <div className='plan-description'>
                <img src={music} className='music-icon' alt="" />
                <div className='plan-price'>
                    <div className='plan'> Annual Plan</div>
                    <div className='price-year'>
                        <div className='price'> $59.99</div>
                        <div className='year'> /year </div>
                    </div>
                </div>
                <div className='change'>Change</div>
            </div>
            <button className='payment'>Proceed to Payment</button>
            <div className='cancel'>Cancel Order</div>
        </div>
    </div>
  )
}

export default Main
