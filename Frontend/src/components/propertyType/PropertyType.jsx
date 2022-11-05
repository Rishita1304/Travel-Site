import React from 'react'
import { Link } from 'react-router-dom'
import './propertytype.css'

const PropertyType = () => {

  return (
    <div className='ptypeContainer'>
        <p className='cityDesc1'>Rent these properties at minimal prices!</p>
 
        <div className="cityImages">
                <>
                    <div className="cityImage">
                        <Link to='/hotell'>
                            <div className="cityImg">
                                <img src="./assets/images/ho.jpg" alt="Hotels" />
                            </div>
                            <h4 className='cityImgTitle'>Hotels</h4>
                            <span className='cityImgProperties'>7 properties</span>
                        </Link>
                    </div>
                    <div className="cityImage">
                        <Link to='/apartment'>
                            <div className="cityImg">
                                <img src="./assets/images/ap.jpg" alt="Apartment" />
                            </div>
                            <h4 className='cityImgTitle'>Apartment</h4>
                            <span className='cityImgProperties'>5 properties</span>
                        </Link>
                    </div>
                    <div className="cityImage">
                        <Link to='/resort'>
                            <div className="cityImg">
                                <img src="./assets/images/re.jpg" alt="Resorts" />
                            </div>
                            <h4 className='cityImgTitle'>Resorts</h4>
                            <span className='cityImgProperties'>3 properties</span>
                        </Link>
                    </div>
                    <div className="cityImage">
                        <Link to='/cabin'>
                            <div className="cityImg">
                                <img src="./assets/images/ca.jpg" alt="Cabins" />
                            </div>
                            <h4 className='cityImgTitle'>Cabins</h4>
                            <span className='cityImgProperties'>4 properties</span>
                        </Link>
                    </div>
                </>
        </div>
    </div>
  )
}

export default PropertyType
