import React from 'react';
import MainLayout from '../../layout/MainLayout';
import '../css/Contact.css';

const Contact = () => {


  return (
    <MainLayout>
      <h1>Connexion</h1>
      <div className='contact'>
        <form 
          name="contact" 
          method="post" 
          className='contact__form' 
          data-netlify="true" 
          onSubmit="submit"
        >   
          <input type="hidden" name="form-name" value="contact" />
          <label for="name">Your Name: </label>
          <input type="text" name="name"/>
          
          <label for="email">Email: </label>
          <input type="email" name="email"/>
        
          <label for="message">Message: </label>
          <textarea name="message"></textarea>
        
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </MainLayout> 
    
  )
}

export default Contact