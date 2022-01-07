import CartContainer from "./CartContainer"
import MainTitle from "./MainTitle"
import TotalSection from "./TotalSection"

function Main(props) {
    return <main id="cart">
        <MainTitle />
        <CartContainer
            basket={props.basket}
            setBasket={props.setBasket}
            decreaseQuantityInBasket={props.decreaseQuantityInBasket}
            increaseQuantityOfStoreItems={props.increaseQuantityOfStoreItems}
            storedItems={props.storedItems}
        />
        <TotalSection
            getTotal={props.getTotal}
        />
    </main>
}
export default Main