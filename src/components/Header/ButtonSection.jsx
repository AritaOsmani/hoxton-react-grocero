function ButtonSection(props) {
    return <div className="button-section">
        <button onClick={function () {
            props.setType('Fruit')
        }}
            className='fruits-btn'>Fruits
        </button>
        <button onClick={function () {
            props.setType('Vegetable')
        }}
            className='vegetables-btn'>Vegetables
        </button>
        <select onChange={function (e) {
            props.setSortValue(e.target.value);
        }}>
            <option disabled selected value="sort-by">Sort by</option>
            <option value="price">By price</option>
            <option value="title">By title</option>
        </select>
    </div>
}
export default ButtonSection