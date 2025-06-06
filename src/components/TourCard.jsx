import React, { useState } from 'react';

const TourCard = ({ id, image, info, price, name, onRemove }) => {
  const [readMore, setReadMore] = useState(false);
//render tour cards
  return (
    <article className="tour-card">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 150)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button className="btn" onClick={() => onRemove(id)}>
          Not Interested
        </button>
        {!id && (
            <div className="no-tours">
                <p>No Tours Rendered. Refresh to load</p>
                <button className="btn" onClick={() => window.location.reload()}>
                    Refresh
                </button>
            </div>
        )} 
      </footer>
    </article>
  );//add not interested button to remove tour card from gallery.

};//add refresh button to reload data

export default TourCard;