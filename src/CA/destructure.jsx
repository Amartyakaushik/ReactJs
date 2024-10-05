import React from 'react';

const Destructure = () => {
  // The nested object
  const user = {
    name: 'Alice',
    address: {
      city: 'New York',
      zipcode: '10001',
    },
  };

  const { name, address: { city, zipcode } } = user;

  return (
    <div>
      <h2>User Information</h2>
      <p> {city} {zipcode}</p>
    </div>
  );
};

export default Destructure;
