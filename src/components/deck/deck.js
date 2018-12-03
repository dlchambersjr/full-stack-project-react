import React from 'react';

import './deck.scss';

import Card from '../card/card.js';

const Deck = props => {
  return (
    <React.Fragment>
      <div>
        <h2>{props.content.deckTitle}</h2>
      </div>
      <section className='deck'>
        {props.content.records && props.content.records.map((card, index) => <Card key={index} content={card} />)}
      </section>
    </React.Fragment>
  );
};

export default Deck;
