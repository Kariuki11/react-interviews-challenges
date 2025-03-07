// ``Implement a Search filter for a list of Items in React.
//  - List of Items - DONE
//  - A way to interact with DOM/ Interact with the list of Items.- DONE
//  - Implement a way to list items. - DONE
//     - Implement a way to filter items. - DONE``

import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const items = [
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      price: 1200,
      stock: 10
    },
    {
      id: 2,
      name: "Smartphone",
      category: "Electronics",
      price: 800,
      stock: 25
    },
    {
      id: 3,
      name: "Desk Chair",
      category: "Furniture",
      price: 150,
      stock: 5
    },
    {
      id: 4,
      name: "Notebook",
      category: "Stationery",
      price: 5,
      stock: 100
    },
    {
      id: 5,
      name: "Headphones",
      category: "Electronics",
      price: 200,
      stock: 15
    }
  ];
  

  return (
    <>
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((items) => (
          <li key={items.id}>
            <h2>{items.name}</h2>
            <p>Category: {items.category}</p>
            <p>Price: ${items.price}</p>
            <p>Stock: {items.stock}</p>
          </li>
        ))}
      </ul>
      <div>
        <h2>Filter by Category</h2>
        <select onChange={()}>
          <option value="all">Electronics</option>
          <option value="all">Furniture</option>
          <option value="all">Stationery</option>
        </select>
      </div>
    </div>
    </>
  )
}

export default App