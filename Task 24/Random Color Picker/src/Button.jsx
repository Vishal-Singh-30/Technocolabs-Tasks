import React from 'react';

const Button = ({ light, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: light ? 'white' : 'black',
        color: light ? 'black' : 'white',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
      }}
    >
      Refresh Color
    </button>
  );
};

export default Button;
