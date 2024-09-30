import React from 'react';

const Menu = ({ chooseVideo }) => {
  // Function to handle button clicks
  const handleClick = (e) => {
    const text = e.target.value; // Get the value of the clicked button
    chooseVideo(text); // Call chooseVideo with the selected value
  };

  return (
    <div>
      <h2>Select a Video:</h2>
      <form onClick={handleClick}>
        <label>
          <input type="radio" name="video" value="fast" defaultChecked />
          Fast Video
        </label>
        <label>
          <input type="radio" name="video" value="slow" />
          Slow Video
        </label>
        <label>
          <input type="radio" name="video" value="cute" />
          Cute Video
        </label>
        <label>
          <input type="radio" name="video" value="eek" />
          Eek Video
        </label>
      </form>
    </div>
  );
};

export default Menu;