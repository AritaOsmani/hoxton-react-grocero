import './StoreItem.css'
function StoreItem(props) {
    return <li>

        <div className="store--item-icon">
            <img src={`./assets/icons/${props.item.id.toString().padStart(3, 0)}-${props.item.title}.svg`} alt={props.item.alt} />
        </div>
        <button>Add to cart</button>
    </li>

}
export default StoreItem