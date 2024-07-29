import React from 'react';
import './Api.css';

const Api = ({ photos }) => {
  return (
    <div className="photo-list">
      {photos.map((photo, index) => (
        <div key={index} className="photo-card">
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <p>{photo.id}</p>
          <p>{photo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Api;
