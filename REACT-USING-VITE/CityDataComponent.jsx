// import React, { useState, useEffect } from 'react';

// const CityDataComponent = () => {
//   // Sample arrays of city data (you will replace these with actual data arrays)
//   const citiesArray1 = [
//     { name: 'City A', population: 800000, area: 300, avgTemp: 20 },
//     { name: 'City B', population: 1200000, area: 500, avgTemp: 27 }
//   ];
  
//   const citiesArray2 = [
//     { name: 'City C', population: 500000, area: 100, avgTemp: 22 },
//     { name: 'City D', population: 2000000, area: 800, avgTemp: 26 }
//   ];

//   // State to store merged and processed city data
//   const [cityData, setCityData] = useState({
//     mergedArray: [],
//     firstHotCity: null,
//     totalArea: 0
//   });

//   useEffect(() => {
//     // Step 1: Merge the two arrays into a single array
//     const mergedCities = [...citiesArray1, ...citiesArray2];
    
//     // Step 2: Filter out cities that have a population of less than 1 million
//     const filteredCities = mergedCities.filter(city => city.population >= 1000000);

//     // Step 3: Increase the population of each remaining city by 5%
//     const updatedCities = filteredCities.map(city => ({
//       ...city,
//       population: city.population * 1.05
//     }));

//     // Step 4: Find the first city with an average temperature above 25°C
//     const firstHotCity = updatedCities.find(city => city.avgTemp > 25);

//     // Step 5: Calculate the total area of all remaining cities
//     const totalArea = updatedCities.reduce((sum, city) => sum + city.area, 0);

//     // Update the state with processed data
//     setCityData({
//       mergedArray: updatedCities,
//       firstHotCity: firstHotCity ? firstHotCity.name : 'No city found',
//       totalArea: totalArea
//     });
//   }, []);

//   return (
//     <div>
//       <h1>City Data Processing</h1>

//       <h2>Merged and Processed Cities</h2>
//       <ul>
//         {cityData.mergedArray.map((city, index) => (
//           <li key={index}>
//             {city.name}: Population - {city.population.toFixed(0)}, Area - {city.area}, Avg Temp - {city.avgTemp}
//           </li>
//         ))}
//       </ul>

//       <h2>First City with Avg Temp greater than 25°C: {cityData.firstHotCity}</h2>
//       <h2>Total Area of Remaining Cities: {cityData.totalArea} sq km</h2>
//     </div>
//   );
// };

// export default CityDataComponent;

// Certainly! Here's a simple way to create a React component that meets the requirements:

// ### Step-by-step Solution

// 1. **Create Product Component:**

// ```jsx
import React from 'react';

const Product = ({ id, name, price, image }) => (
  <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{`$${price}`}</td>
    <td><img src={image} alt={name} style={{ width: '50px' }} /></td>
  </tr>
);

// export default Product;
// ```
// {
// // 2. **Create ProductTable Component:**

// // ```jsx}

// import React from 'react';
// import Product from './Product';

const ProductTable = ({ products }) => {
  const total = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <Product key={product.id} {...product} />
          ))}
        </tbody>
      </table>
      <h3>{`Total Price: $${total}`}</h3>
    </div>
  );
};

// export default ProductTable;
// ```

// {3. **Use the Component in App:**}


// import React from 'react';
// import ProductTable from './ProductTable';

const App = () => {
  const products = [
    { id: 1, name: 'Laptop', price: 1500, image: 'laptop.jpg' },
    { id: 2, name: 'Phone', price: 800, image: 'phone.jpg' },
    { id: 3, name: 'Tablet', price: 500, image: 'tablet.jpg' },
    { id: 4, name: 'Smartwatch', price: 200, image: 'smartwatch.jpg' },
  ];

  return <ProductTable products={products} />;
};

export default App;
// ```

// // ### Explanation

// // - **Product Component**: Renders each product row as a table row.
// // - **ProductTable Component**: Uses `map` to render each product and calculates the total price using `reduce`.
// // - **App Component**: Passes product data to `ProductTable` as props.

// // This code will display a table with products and calculate the total price, passing data from the parent to child components using props. Adjust image paths and data as needed for your setup.