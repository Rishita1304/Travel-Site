import { faMapLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import PhotoAlbum from "react-photo-album";
import './hotel.css'
import Subscribe from '../../components/subscribe/Subscribe';
import Footer from '../../components/footer/Footer';
import useFetch from '../../hooks/useFetch';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';

const Hotel = () => {
  const location = useLocation();
  console.log(location);
  const id = location.pathname.split("/")[2];

  const {data, loading} = useFetch(`/api/hotels/find/${id}`);
    const navigate = useNavigate()

    const {date, options} = useContext(SearchContext);
    const MILLISECONDS_PER_DAYS = 1000 * 60 * 60 *24;
    function dayDifference(date1, date2) {
      const timeDifferent = Math.abs(date2.getTime() - date1.getTime());
      const differentDays = Math.ceil(timeDifferent / MILLISECONDS_PER_DAYS);
      return differentDays;
    }
    const days = (dayDifference(date[0].endDate, date[0].startDate));

    const handleClick = () => {
      alert('Booking Successful!!');
      navigate('/');
    }

    const photos = [
      {
        src: "../assets/images/hotels/1.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/hotels/1.1.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/hotels/1.2.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/hotels/1.3.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/hotels/1.4.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/hotels/1.5.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/hotels/1.6.jpg",
        width: 800,
        height: 600
      }
    ];

  return (
    <>
      <Header type="smallHeader" />
      {
        loading ? (<h2>Loading...</h2>) : (
          <div className="hotelContainer">
            <div className="hotelRow">
                <div className="hotelCol">
                  <h2 className='hotelTitle'>{data.name}</h2>
                  <span><FontAwesomeIcon icon={faMapLocation} /> {data.address}</span><br /><br />
                  <h3><strong>For {options.room} rooms, Price: ${days * data.price * options.room} for {days} days!</strong></h3>
                </div>
                <div className="hotelCol">
                  <button className="hotelBtn" onClick={handleClick}>Book Now</button>
                </div>
            </div>
            <div className="hotelRow">
              <PhotoAlbum layout="rows" photos={photos} />
            </div>
            <div className="hotelRow">
              <h3 className='hotelSubTitle'>Description</h3>
              <p className="hotelDesc">{data.desc}
              </p>
            </div>  
          </div>
        )
      }
      <Subscribe />
      <Footer />
    </>
  )
}

export default Hotel
