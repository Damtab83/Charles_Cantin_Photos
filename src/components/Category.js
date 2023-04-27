import React from 'react'

const Category = () => {
  return (
    <div className='category-bar'>
      <label for="category">Catégories:</label>
      <select name="category" id="pet-select">
        <option value="all">Toutes les catégories</option>
        <option value="solo">Solo</option>
        <option value="married">Mariage</option>
        <option value="pregnant">Grossesse</option>
        <option value="baby">Bébé</option>
        <option value="familly">Famille</option>
        <option value="baptism">Baptême</option>
        <option value="couple">Couple</option>
        <option value="portrait">Portrait</option>
      </select>
    </div>
  )
}

export default Category