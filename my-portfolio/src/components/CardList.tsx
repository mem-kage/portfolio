import React, { useEffect, useState } from 'react';
import Card from './Card';

type CardListProps = {
  genre: {
    title: string;
    tag: string;
  }[];
};

const CardList = ({ genre }: CardListProps) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("../sample.json")
      .then((response) => response.json())
      // .then((data) => setItems(data));
  }, []);
  
  return (
    <div>
    </div>
  );
};

export default CardList;
