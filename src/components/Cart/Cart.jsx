import "./cart.css"
import PropTypes from 'prop-types';

const Cart = ({bottlePurchase, handleRemoveButton}) => {
    // console.log(bottlePurchase)
    return (
        <div>
            <h4>Cart : {bottlePurchase.length}</h4>
            <div className="cart-container">
            {
                bottlePurchase.map((bottle, idx) => <div  key={idx}>
                    <img src={bottle.img}></img>
                    <button onClick={()=>handleRemoveButton(bottle.id)}>Remove</button>
                </div>)
            }
            </div>
        </div>
    );
};

Cart.propTypes = {
    bottlePurchase: PropTypes.array.isRequired,
    handleRemoveButton: PropTypes.func.isRequired,
}
export default Cart;