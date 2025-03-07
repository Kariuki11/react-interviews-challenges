// #4 Build a component that changes the background color every time a button is clicked.
// - Implement a way to change the background color.
// - Implement a way to use a button to change the background color.
// - Implement a way to use a component to change the background color.

import React from 'react'
import { useState } from 'react'

const ChangeColor = () => {

  const Colors = ['#f44336', '#2196f3', '#4caf50', '#ffeb3b', '#9c27b0', '#ff9800'];
  const [bgColor, setBgColor] = useState('#ffffff');

  const changeColor = () => {
    const randomIndex = Math.floor(Math.random() * Colors.length);
    setBgColor(Colors[randomIndex]);
  };

  return (
    <div>
      <h1>Welcome to Our Official changing color site.</h1>
      <div>
        <button>
          Change Color
        </button>
      </div>
    </div>
  )
}

export default ChangeColor