// src/components/Test.js
import React, { useEffect, useState } from 'react';

const Test = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/test')
      .then(res => res.json())
      .then(result => setData(result.msg))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Test API Response:</h1>
      <p>{data}</p>
    </div>
  );
};

export default Test;
