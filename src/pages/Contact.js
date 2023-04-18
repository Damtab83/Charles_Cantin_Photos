import React from 'react';
import MainLayout from '../layout/MainLayout';
import '../components/css/Contact.css';

const Contact = () => {


  return (
    <MainLayout>
        <div className='body-contact'>
          <h1 className='title-form'>Connexion</h1>
          
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
        </div>
    </MainLayout> 
    
  )
}

export default Contact