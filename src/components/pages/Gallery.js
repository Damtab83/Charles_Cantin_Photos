import React from 'react';
import MainLayout from '../../layout/MainLayout';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import "../css/Gallery.css"
const Gallery = () => {

  // const data = [
  //   {
  //     id: 1,
  //     image: {baby},
  //     title: "Mariage",
  //   },
  //   {
  //     id: 2,
  //     image: {couple},
  //     title: "Baptême",
  //   },
  //   {
  //     id: 3,
  //     image: {baptism},
  //     title: "Couple",
  //   },
  // ]
  return (
    <MainLayout>

      {/* <Carousel>
        {data.map( slide => {
          <div key={slide.id}>
            <img src={slide.image} alt="slide.title" />
          </div>
        }
        )}
      </Carousel> */}

        Hello
    </MainLayout>

  )
}

export default Gallery;