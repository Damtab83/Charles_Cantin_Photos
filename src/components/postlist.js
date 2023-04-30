import React, { useEffect, useState } from "react"
import postlisting from "../posts.json"
import './css/Photolist.css'

const PostList = () => {

  const [cate, setCate] = useState('all');
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect( () => {
      cate === 'all' ? setFilteredImages(postlisting) : setFilteredImages(postlisting.filter(image => image.categories === cate))
    }, [cate])

    const onChanging = (event) => {
      const value = event.target.value;
      setCate(value);
    }
    
  return (
    <>
    {/* Menu Category */}
    <div className='category-bar'>
      <label for="category">Catégories:</label>
      <select name="category" id="category-select" onChange={onChanging}>
        <option value="all">Toutes les catégories</option>
        <option value="Solo">Portrait</option>
        <option value="Mariage">Mariage</option>
        <option value="Grossesse">Grossesse</option>
        <option value="Bébé">Bébé</option>
        <option value="Famille">Famille</option>
        <option value="Baptême">Baptême</option>
        <option value="Couple">Couple</option>
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
                    )
                })}
                
            </div>
        </div>
    </>
  )
}

export default PostList