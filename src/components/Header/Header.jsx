import StoreItemsList from "./StoreItemsList"
import Title from "./Title"
import './Header.css'
function Header(props) {
    return <header id="store">
        <Title />
        <StoreItemsList
            storeItems={props.storeItems}
            basket={props.basket}
            setBasket={props.setBasket}
            increaseQuantityInBasket={props.increaseQuantityInBasket}
            decreaseQuantityOfStoreItems={props.decreaseQuantityOfStoreItems}
        />
    </header>
}

export default Header