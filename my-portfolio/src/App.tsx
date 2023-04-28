import React from 'react';
import CardList from './components/CardList';

const genre = [
  {
    title: 'Webアプリ開発',
    tag: 'app',
  },
  {
    title: 'デザイン',
    tag: 'design',
  },
];

const App = () => {
  return (
    <div>
      <h1>My Portfolio</h1>
      <CardList genre={genre} />
    </div>
  );
};

export default App;
