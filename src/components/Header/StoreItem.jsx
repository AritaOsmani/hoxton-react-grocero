import './StoreItem.css'
function StoreItem(props) {
    function addItemToBasket(storeItem) {
        if (storeItem.quantity === 0) {
            return
        }
        const newBasket = [...props.basket];
        const newStoreItems = [...props.storeItems];

        const itemToAdd = {
            id: storeItem.id,
            title: storeItem.title,
            price: storeItem.price,
            quantity: 1
        }
        let index = newBasket.findIndex(itemInBasket => itemInBasket.id === storeItem.id);
        if (index === -1) {
            newBasket.push(itemToAdd);
            props.setBasket(newBasket)
        } else {
            props.increaseQuantityInBasket(storeItem, newBasket);
        }
        // props.decreaseQuantityOfStoreItems(storeItem, newStoreItems);
        props.decreaseQuantityOfStoreItems(storeItem, props.other);
    }
    return <li>

        <div className="store--item-icon">
            <img src={`./assets/icons/${props.item.id.toString().padStart(3, 0)}-${props.item.title}.svg`} alt={props.item.alt} />
        </div>
        <div className="storeItem-quantity">{props.item.quantity}</div>
        <button onClick={function () {
            addItemToBasket(props.item)
        }}>Add to cart</button>
    </li>

}
export default StoreItem