import React from 'react'
import Carousel from 'better-react-carousel'
import Card from './Card';

const GalleryCarousel = () => {
  return (
    <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <Card />
      </Carousel.Item>
      <Carousel.Item>
        <Card />
      </Carousel.Item>
      <Carousel.Item>
        <Card />
      </Carousel.Item>
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>
  )
}

export default GalleryCarousel;