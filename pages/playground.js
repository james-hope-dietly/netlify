import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { mockedItems } from '../components/helpers/mock';

const Playground = () => {
  const initObj = useCallback(() => {
    console.log('robię initObj');
    return { a: 1, b: 2 };
  }, []);
  const [counter, setCounter] = useState(0);
  const memoizedObj = useMemo(() => {
    return initObj();
  }, [initObj]);
  console.log('counter: ', counter);

  return (
    <div>
      {/*<p>{`init obj a: ${initObj().a}`}</p>*/}
      <p>{`memoized init obj a: ${memoizedObj.a}`}</p>
      <button onClick={() => setCounter(prev => prev + 1)}>Dodaj</button>
    </div>
  );
};

export default Playground;
