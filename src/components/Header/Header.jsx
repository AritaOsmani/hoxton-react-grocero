import StoreItemsList from "./StoreItemsList"
import Title from "./Title"
import './Header.css'
import ButtonSection from "./ButtonSection"
function Header(props) {
    return <header id="store">
        <Title />
        <ButtonSection
            setType={props.setType}
            setSortValue={props.setSortValue}
        />
        <StoreItemsList
            storeItems={props.storeItems}
            basket={props.basket}
            setBasket={props.setBasket}
            increaseQuantityInBasket={props.increaseQuantityInBasket}
            decreaseQuantityOfStoreItems={props.decreaseQuantityOfStoreItems}
            other={props.other}
        />
    </header>
}

export default Header