import React from 'react';
import "../styles/components/Card.scss";

type CardProps = {
  title: string;
};

const Card = ({ title }: CardProps) => {
  return (
    <div className='card'>
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
