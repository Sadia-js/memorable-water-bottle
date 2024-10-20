import PropTypes from 'prop-types';

const Bottle = ({bottle, handlePurchaseButton}) => {
    const {name, img, price} = bottle;
    return (
        <div style={{border: '2px solid green', borderRadius: '20px', padding: '15px'}}>
            <h4>Bottle : {name}</h4>
            <img style={{width: '180px'}} src={img} alt="bottle" />
            <p>Price : ${price}</p>
            <button onClick={()=>handlePurchaseButton(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handlePurchaseButton: PropTypes.func.isRequired,
}
export default Bottle;