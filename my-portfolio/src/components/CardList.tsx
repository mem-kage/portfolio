import React from 'react';
import Card from './Card';

type CardListProps = {
  cards: {
    title: string;
    description: string;
  }[];
};

const CardList = ({ cards }: CardListProps) => {
  return (
    <div>
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default CardList;
