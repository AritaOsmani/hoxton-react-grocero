import StoreItemsList from "./StoreItemsList"
import Title from "./Title"
import './Header.css'
function Header(props) {
    return <header id="store">
        <Title />
        <StoreItemsList
            storeItems={props.storeItems}
        />
    </header>
}

export default Header