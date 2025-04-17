import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import pageNotFound from '../../assets/images/PageNotFound.jpg'

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-wrapper">
        <img src={pageNotFound} className='errorImage'/>
      <button className="notfound-button" onClick={() => navigate('/')}>
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
