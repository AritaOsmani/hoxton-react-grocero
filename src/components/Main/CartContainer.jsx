import CartItem from "./CartItem"

function CartContainer(props) {
    return <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
            {/* <!-- Take a look at cart-item.html --> */}
            {props.basket.map(itemInBasket => {
                return <CartItem
                    item={itemInBasket}
                    key={itemInBasket.id}
                    basket={props.basket}
                    setBasket={props.setBasket}
                    decreaseQuantityInBasket={props.decreaseQuantityInBasket}
                    increaseQuantityOfStoreItems={props.increaseQuantityOfStoreItems}
                    storedItems={props.storedItems}
                />
            })}

        </ul>
    </div>
}
export default CartContainer