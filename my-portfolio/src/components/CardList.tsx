import React, { useEffect, useState } from 'react';
import Card from './Card';
import data from '../sample.json';

type CardListProps = {
  genre: {
    title: string;
    tag: string;
  }[];
};

const CardList = ({ genre }: CardListProps) => {  
  return (
    <div>
      {Object.entries(data).map(([key, values], index) => (
        <div key={key}>
          <h2>{genre[index].title}</h2>
          {values.map((value) => (
            <Card id={value.id} title={value.title} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CardList;
