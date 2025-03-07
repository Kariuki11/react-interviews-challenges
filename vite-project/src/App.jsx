import React from 'react'

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
















// import { useState } from 'react';

// const ColorChanger = () => {
//   const colors = ['#f44336', '#2196f3', '#4caf50', '#ffeb3b', '#9c27b0', '#ff9800'];
//   const [bgColor, setBgColor] = useState('#ffffff');

//   const changeColor = () => {
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     setBgColor(colors[randomIndex]);
//   };

//   return (
//     <div className="h-screen flex justify-center items-center" style={{ backgroundColor: bgColor }}>
//       <button
//         className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
//         onClick={changeColor}
//       >
//         Change Background Color
//       </button>
//     </div>
//   );
// };

// export default ColorChanger;