import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {
  const [storeItems, setStoreItems] = useState([
    {
      id: 1,
      title: 'beetroot',
      price: 0.25,
      quantity: 5

    },
    {
      id: 2,
      title: 'carrot',
      price: 0.3,
      quantity: 8
    },
    {
      id: 3,
      title: 'apple',
      price: 0.3,
      quantity: 10
    },
    {
      id: 4,
      title: 'apricot',
      price: 0.35,
      quantity: 6
    },
    {
      id: 5,
      title: 'avocado',
      price: 0.4,
      quantity: 3
    },
    {
      id: 6,
      title: 'bananas',
      price: 0.8,
      quantity: 15
    },
    {
      id: 7,
      title: 'bell-pepper',
      price: 0.6,
      quantity: 12
    },
    {
      id: 8,
      title: 'cherry',
      price: 0.5,
      quantity: 10
    },
    {
      id: 9,
      title: 'blueberry',
      price: 0.6,
      quantity: 7
    },
    {
      id: 10,
      title: 'eggplant',
      price: 0.65,
      quantity: 5
    }


  ]);
  const [basket, setBasket] = useState([]);

  // function addItemToBasket(storeItem) {
  //   const newBasket = [...basket];
  //   const newStoreItems = [...storeItems];
  //   const itemToAdd = {
  //     id: storeItem.id,
  //     title: storeItem.title,
  //     price: storeItem.price,
  //     quantity: 1
  //   }
  //   let index = newBasket.findIndex(itemInBasket => itemInBasket.id === storeItem.id);
  //   if (index === -1) {
  //     newBasket.push(itemToAdd);
  //     setBasket(newBasket)
  //   } else {
  //     increaseQuantityInBasket(storeItem, newBasket);
  //   }
  //   decreaseQuantityOfStoreItems(storeItem, newStoreItems);
  // }
  function increaseQuantityOfStoreItems(storeItem, newStoreItems) {
    // const newStoreItems = [...storeItems];
    let foundElement = newStoreItems.find(item => item.id === storeItem.id);
    foundElement.quantity++;
    setStoreItems(newStoreItems);
  }
  function decreaseQuantityOfStoreItems(storeItem, newStoreItems) {
    // const newStoreItems = [...storeItems];
    let foundElement = newStoreItems.find(item => item.id === storeItem.id);
    foundElement.quantity--;
    setStoreItems(newStoreItems);
  }
  function increaseQuantityInBasket(basketItem, newBasketItems) {
    // const newBasketItems = [...basket];
    let foundElement = newBasketItems.find(item => item.id === basketItem.id);
    foundElement.quantity++;
    setBasket(newBasketItems);
  }
  function decreaseQuantityInBasket(basketItem, newBasketItems) {
    // const newBasketItems = [...basket];
    let foundElement = newBasketItems.find(item => item.id === basketItem.id);
    foundElement.quantity--;
    setBasket(newBasketItems);
  }
  function getTotal() {
    let total = 0;
    for (const basketItem of basket) {
      total += basketItem.quantity * basketItem.price;
    }

    return total;
  }
  return (
    <div className="App">
      <Header
        storeItems={storeItems}
        basket={basket}
        setBasket={setBasket}
        increaseQuantityInBasket={increaseQuantityInBasket}
        decreaseQuantityOfStoreItems={decreaseQuantityOfStoreItems}
      />

      <Main
        basket={basket}
        setBasket={setBasket}
        decreaseQuantityInBasket={decreaseQuantityInBasket}
        increaseQuantityOfStoreItems={increaseQuantityOfStoreItems}
        storedItems={storeItems}
        getTotal={getTotal()}
      />


    </div>
  )
}

export default App
