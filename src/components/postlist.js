import React, { useEffect, useState } from 'react'
import postlist from "../posts.json"
import './css/Photolist.css'

const PostList = () => {

    const [cate, setCate] = useState('all');
    const [filteredImages, setFilteredImages] = useState([]);
  
    useEffect(
      () => {
        cate === 'all' ? setFilteredImages(postlist) : setFilteredImages(postlist.filter(image => image.categories === cate))
      }, [cate])
  
      const onChange = (event) => {
        const value = event.target.value;
        setCate(value);
      }
    return (
      <>
      {/* Menu Category */}
      <div className='category-bar'>
        <label for="category">Catégories:</label>
        <select name="category" id="category-select" onChange={onChange}>
          <option value="all">Toutes les catégories</option>
          <option value="solo">Portrait</option>
          <option value="mariage">Mariage</option>
          <option value="grossesse">Grossesse</option>
          <option value="bebe">Bébé</option>
          <option value="famille">Famille</option>
          <option value="bapteme">Baptême</option>
          <option value="couple">Couple</option>
        </select>
      </div>
  
      {/* Photo Gallery */}
      <div className="photolist">
              <h1 className="title-photolist">Galerie Photos</h1>
              
              <div className="gallery">
              { cate && filteredImages.map(image => {
                return (
                  <div key={image.id}>
                    <img style={{width: '100%'}} src={image.thumbnail} alt={image.title}/>
                  </div>
                )})}
              </div>
          </div>
      </>
    )
  }

export default PostList