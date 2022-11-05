import React from 'react'
import { Link } from 'react-router-dom'
import './city.css'

const City = () => {

  return (
    <div id='city' className='cities'>
        <h2 className="cityTitle">Explore!</h2>
        <p className='cityDesc'>These popular destinations have a lot to offer!</p>
        <div className="cityImages">
                <>
                    <div className="cityImage">
                        <Link to='/romania' >
                            <div className="cityImg">
                                <img src="./assets/images/roo.jpg" alt="Romania" />
                            </div>
                            <h4 className='cityImgTitle'>Romania</h4>
                            <span className='cityImgProperties'>4 properties</span>
                        </Link>
                    </div>
                    <div className="cityImage">
                        <Link to='/hungary'>
                            <div className="cityImg">
                                <img src="./assets/images/hu.jpg" alt="Hungary" />
                            </div>
                            <h4 className='cityImgTitle'>Hungary</h4>
                            <span className='cityImgProperties'>2 properties</span>
                        </Link>
                    </div>
                    <div className="cityImage">
                        <Link to='/iran'>
                            <div className="cityImg">
                                <img src="./assets/images/ir.jpg" alt="Iran" />
                            </div>
                            <h4 className='cityImgTitle'>Iran</h4>
                            <span className='cityImgProperties'>1 properties</span>
                        </Link>
                    </div>
                    <div className="cityImage">
                        <Link to='/london'>
                            <div className="cityImg">
                                <img src="./assets/images/lo.jpg" alt="London" />
                            </div>
                            <h4 className='cityImgTitle'>London</h4>
                            <span className='cityImgProperties'>1 properties</span>
                        </Link>
                    </div>
                </>
        </div>
    </div>
  )
}

export default City
