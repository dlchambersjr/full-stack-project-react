import React from 'react';

import './card.scss';

const Card = props => {
  return (
    <div className='card'>
      <h1>{props.content.title}</h1>
      <p>{props.content.copy}</p>
      <figure>
        <img
          src={props.content.media.href}
          alt={props.content.media.alt}
          title={props.content.media.title}
        />
        <figcaption>{props.content.media.title}</figcaption>
      </figure>
      <div className="links">
        {props.content.links.map((link, index) => (
          <a key={index} className={link.type} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Card;