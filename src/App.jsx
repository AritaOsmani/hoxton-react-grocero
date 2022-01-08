import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {
  const [storeItems, setStoreItems] = useState([
    {
      id: 1,
      title: 'beetroot',
      price: 0.65,
      quantity: 5,
      type: 'Vegetable'
    },
    {
      id: 2,
      title: 'carrot',
      price: 0.3,
      quantity: 8,
      type: 'Vegetable'
    },
    {
      id: 3,
      title: 'apple',
      price: 0.3,
      quantity: 10,
      type: 'Fruit'
    },
    {
      id: 4,
      title: 'apricot',
      price: 0.35,
      quantity: 6,
      type: 'Fruit'
    },
    {
      id: 5,
      title: 'avocado',
      price: 0.4,
      quantity: 3,
      type: 'Fruit'
    },
    {
      id: 6,
      title: 'bananas',
      price: 0.8,
      quantity: 15,
      type: 'Fruit'
    },
    {
      id: 7,
      title: 'bell-pepper',
      price: 0.6,
      quantity: 12,
      type: 'Vegetable'
    },
    {
      id: 8,
      title: 'cherry',
      price: 0.5,
      quantity: 10,
      type: 'Fruit'
    },
    {
      id: 9,
      title: 'blueberry',
      price: 0.6,
      quantity: 7,
      type: 'Fruit'
    },
    {
      id: 10,
      title: 'eggplant',
      price: 0.65,
      quantity: 5,
      type: 'Vegetable'
    }


  ]);
  const [basket, setBasket] = useState([]);
  const [type, setType] = useState('');
  const [sortValue, setSortValue] = useState('')

  function storeItemsToDisplay() {
    let display = [...storeItems];

    if (type === 'Fruit') {
      display = display.filter(item => item.type === type);
    }
    if (type === 'Vegetable') {
      display = display.filter(item => item.type === type);
    }
    if (sortValue === 'price') {
      display.sort(function (a, b) {
        return a.price - b.price;
      })
    }
    if (sortValue === 'title') {
      display.sort(function (a, b) {
        let x = a.title.charAt(0).charCodeAt(0);
        let y = b.title.charAt(0).charCodeAt(0);
        if (x - y < 0) {
          return -1;
        }
        if (x - y > 0) {
          return 1;
        }
      });
    }
    return display;
  }

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
        // storeItems={storeItems}
        storeItems={storeItemsToDisplay()}
        basket={basket}
        setBasket={setBasket}
        increaseQuantityInBasket={increaseQuantityInBasket}
        decreaseQuantityOfStoreItems={decreaseQuantityOfStoreItems}
        setType={setType}
        other={storeItems}
        setSortValue={setSortValue}
      />

      <Main
        basket={basket}
        setBasket={setBasket}
        decreaseQuantityInBasket={decreaseQuantityInBasket}
        increaseQuantityOfStoreItems={increaseQuantityOfStoreItems}
        storedItems={storeItems}
        // storedItems={storeItemsToDisplay()}
        getTotal={getTotal()}
      />


    </div>
  )
}

export default App
