import StoreItem from "./StoreItem"
import './StoreItemList.css'
function StoreItemsList(props) {
    return <ul className="item-list store--item-list">
        {/* <!-- Take a look at store-item.html --> */}
        {props.storeItems.map((item) => {

            return (<StoreItem
                item={item}
                alt={item.title}
                key={item.id}
            />)
        })}

    </ul>

}

export default StoreItemsList