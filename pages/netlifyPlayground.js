import React from 'react';

const NetlifyPlayground = () => {
  const onClick = () => {
    fetch('/.netlify/functions/requests').then(data =>
      console.log('DATA: ', data)
    );
  };

  const defaultMenus = {
    dietId: 581,
    dates: [
      '2021-09-27',
      '2021-09-26',
      '2021-09-25',
      '2021-09-24',
      '2021-09-23',
      '2021-09-22',
      '2021-09-21',
      '2021-09-20',
      '2021-09-28',
      '2021-09-29',
      '2021-09-30',
      '2021-10-01',
      '2021-10-02',
    ],
  };

  const fetchMenus = menusy => {
    fetch('/.netlify/functions/menu', {
      method: 'POST',
      body: JSON.stringify(menusy),
    }).then(data => console.log('MENUS: ', data));
  };
  const fetchDiets = () => {
    fetch('/.netlify/functions/diets').then(data =>
      console.log('DIETS: ', data)
    );
  };
  const fetchPrices = () => {
    fetch('/.netlify/functions/prices').then(data =>
      console.log('PRICES: ', data)
    );
  };

  return (
    <div>
      <p>This is netlify playground</p>
      <button onClick={onClick}>Testowy fetch</button>
      <button onClick={() => fetchMenus(defaultMenus)}>Pobierz menu</button>
      <button onClick={fetchDiets}>Pobierz diety</button>
      <button onClick={fetchPrices}>Pobierz ceny</button>
    </div>
  );
};

export default NetlifyPlayground;
