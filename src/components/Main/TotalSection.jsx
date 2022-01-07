function TotalSection(props) {

    return <div className="total-section">
        <div>
            <h3>Total</h3>
        </div>

        <div>
            <span className="total-number">£ {props.getTotal}</span>
        </div>
    </div>
}
export default TotalSection