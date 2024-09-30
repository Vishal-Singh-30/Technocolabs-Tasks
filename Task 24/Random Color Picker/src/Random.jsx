import React, { useState } from 'react';
import Button from './Button.jsx'; // Ensure you use the .jsx extension for Vite compatibility

// Random component as a functional component
const Random = () => {
  // Initialize state with a white background using useState Hook
  const [color, setColor] = useState([255, 255, 255]);

  // Format color array into RGB string
  const formatColor = (ary) => {
    return `rgb(${ary.join(', ')})`;
  };

  // Check if the color is light
  const isLight = () => {
    return color.reduce((a, b) => a + b) > 127 * 3;
  };

  // Generate a random RGB color
  const chooseColor = () => {
    const randomColor = [];
    for (let i = 0; i < 3; i++) {
      randomColor.push(Math.floor(Math.random() * 256));
    }
    return randomColor;
  };

  // Handle button click to update color
  const handleClick = () => {
    setColor(chooseColor());
  };

  // Render the component
  return (
    <div style={{ backgroundColor: formatColor(color), height: '100vh' }}>
      <h1 style={{ color: isLight() ? 'black' : 'white' }}>
        Your color is {formatColor(color)}
      </h1>
      <Button light={isLight()} onClick={handleClick} />
    </div>
  );
};

export default Random;
