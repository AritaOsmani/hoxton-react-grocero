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
    </div>
}
export default ButtonSection