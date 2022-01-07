function CartItem(props) {
    return <li>
        <img
            className="cart--item-icon"
            src={`./assets/icons/${props.item.id.toString().padStart(3, 0)}-${props.item.title}.svg`} alt={props.item.alt}

        />
        <p>{props.item.title}</p>
        <button className="quantity-btn remove-btn center">-</button>
        <span className="quantity-text center">{props.item.quantity}</span>
        <button className="quantity-btn add-btn center">+</button>
    </li>
}
export default CartItem