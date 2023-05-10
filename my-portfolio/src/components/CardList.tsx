import React from 'react';
import Card from './Card';
import data from '../sample.json';
import "../styles/components/CardList.scss";

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
        <div className='cardAreaWrapper' key={key}>
          <h2>{genre[index].title}</h2>
          <div className='cardList'>
            {values.map((value) => (
              <Card id={value.id} title={value.title} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
