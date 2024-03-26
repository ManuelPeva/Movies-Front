import React, { useState } from 'react';

const Card = ({ movie }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className="card">
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <div className="card-body">
        <h3 className="card-title">{movie.title}</h3>
        <p className="card-text">{movie.overview}</p>
        <div className="button-container">
          <button className={`like-button ${likes > 0 ? 'active' : ''}`} onClick={handleLike}>
            Me gusta ({likes})
          </button>
          <button className={`dislike-button ${dislikes > 0 ? 'active' : ''}`} onClick={handleDislike}>
            No me gusta ({dislikes})
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
