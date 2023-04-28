import React from 'react';
import "../styles/components/Card.scss";

type CardProps = {
  id: number;
  title: string;
};

const Card = ({ id, title }: CardProps) => {
  return (
    <div key={id} className='card'>
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
