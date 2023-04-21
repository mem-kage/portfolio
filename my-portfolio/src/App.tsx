import React from 'react';
import CardList from './components/CardList';

const cards = [
  {
    title: 'Webデザイン',
    description: 'ウェブサイトやランディングページのデザイン作成',
  },
  {
    title: 'ロゴデザイン',
    description: '企業やブランドのロゴマークのデザイン作成',
  },
  {
    title: 'Web開発',
    description: 'React、Node.jsを用いたWebアプリケーションの開発',
  },
  {
    title: 'アプリ開発',
    description: 'iOS、Androidアプリの開発',
  },
];

const App = () => {
  return (
    <div>
      <h1>My Portfolio</h1>
      <CardList cards={cards} />
    </div>
  );
};

export default App;
