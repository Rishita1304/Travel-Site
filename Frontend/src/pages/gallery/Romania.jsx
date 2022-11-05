import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Header from '../../components/header/Header'
import PhotoAlbum from "react-photo-album";
import Subscribe from '../../components/subscribe/Subscribe';
import Footer from '../../components/footer/Footer';

const Romania = () => {



    const photos = [
      {
        src: "../assets/images/ro1.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/ro2.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/ro3.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/ro4.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/ro5.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/ro6.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/ro7.jpg",
        width: 800,
        height: 600
      }
    ];

  return (
    <>
      <Header type="smallHeader" />
          <div className="hotelContainer">
          <div className="hotelRow">
                <div className="hotelCol">
                  {/* <h2 className='hotelTitle'>Relax casa Victoria</h2> */}
                  <h2 className='hotelTitle'><FontAwesomeIcon icon={faLocation} /> Romania</h2><hr />

                </div>
            </div>
            <div className="hotelRow">
              <PhotoAlbum layout="rows" photos={photos} />
            </div>
            
          </div>
      <Subscribe />
      <Footer />
    </>
  )
}

export default Romania
