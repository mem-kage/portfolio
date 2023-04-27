import React, { useEffect, useState } from 'react';
import Card from './Card';
import Sample from '../sample.json';

type CardListProps = {
  genre: {
    title: string;
    tag: string;
  }[];
};

const CardList = ({ genre }: CardListProps) => {
  const appList = Sample;
  console.log(appList.app)
  
  return (
    <div>
      {genre.map((item, index) => (
        // <Card key={index} title={card.title} description={card.description} />
        Sample.app.map((a,index) => (
          <>
          <p>{a.id}</p>
          <p>{a.tag}</p>
          </>
        ))
      ))}
    </div>
  );
};

export default CardList;
