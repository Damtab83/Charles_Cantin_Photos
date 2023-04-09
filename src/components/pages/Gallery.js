import React from 'react';
import MainLayout from '../../layout/MainLayout';
import GalleryCarousel from './GalleryCarousel';

const Gallery = () => {

  const categorie = ['mariage', 'bapteme', 'solo', 'duo'];


  return (
    <MainLayout>
      <GalleryCarousel />

    </MainLayout>

  )
}

export default Gallery;