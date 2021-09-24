import React from 'react';

const NetlifyPlayground = () => {
  const onClick = () => {
    fetch('/.netlify/functions/requests')
      // .then(res => res.json())
      .then(data => console.log('DATA: ', data));
  };

  return (
    <div>
      <p>This is netlify playground</p>
      <button onClick={onClick}>Fetchnij</button>
    </div>
  );
};

export default NetlifyPlayground;
