function CartItem(props) {

    function removeItemFromBasket(basketItem) {
        const newBasketItems = [...props.basket];
        const basketWithRemovedElement = newBasketItems.filter(item => item.id !== basketItem.id)
        props.setBasket(basketWithRemovedElement);
    }
    return <li>
        <img
            className="cart--item-icon"
            src={`./assets/icons/${props.item.id.toString().padStart(3, 0)}-${props.item.title}.svg`} alt={props.item.alt}

        />
        <p>{props.item.title}</p>

        <button onClick={function () {
            const newBasket = [...props.basket]
            const newStoreItems = [...props.storedItems]
            props.decreaseQuantityInBasket(props.item, newBasket)
            props.increaseQuantityOfStoreItems(props.item, newStoreItems)
            if (props.item.quantity === 0) {
                removeItemFromBasket(props.item)
            }
        }}
            className="quantity-btn remove-btn center">-
        </button>
        <span className="quantity-text center">{props.item.quantity}</span>
        <button className="quantity-btn add-btn center">+</button>
    </li>
}
export default CartItem