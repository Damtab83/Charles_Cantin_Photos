import React from 'react';
import MainLayout from '../layout/MainLayout';
import "../components/css/Gallery.css"
import PostList from '../components/postlist';

const Gallery = () => {

  return (
    <MainLayout>
      <PostList />
    </MainLayout>

  )
}

export default Gallery;