import CartContainer from "./CartContainer"
import MainTitle from "./MainTitle"
import TotalSection from "./TotalSection"

function Main(props) {
    return <main id="cart">
        <MainTitle />
        <CartContainer
            basket={props.basket}
        />
        <TotalSection />
    </main>
}
export default Main