import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {
  const [storeItems, setStoreItems] = useState([
    {
      id: 1,
      title: 'beetroot',
      price: 0.25

    },
    {
      id: 2,
      title: 'carrot',
      price: 0.3
    },
    {
      id: 3,
      title: 'apple',
      price: 0.3
    },
    {
      id: 4,
      title: 'apricot',
      price: 0.35
    },
    {
      id: 5,
      title: 'avocado',
      price: 0.4
    },
    {
      id: 6,
      title: 'bananas',
      price: 0.8
    },
    {
      id: 7,
      title: 'bell-pepper',
      price: 0.6
    },
    {
      id: 8,
      title: 'berry',
      price: 0.5
    },
    {
      id: 9,
      title: 'blueberry',
      price: 0.6
    },
    {
      id: 10,
      title: 'eggplant',
      price: 0.65
    }


  ]);
  const [basket, setBasket] = useState([]);

  return (
    <div className="App">
      <Header
        storeItems={storeItems}
      />

      <Main />


    </div>
  )
}

export default App
