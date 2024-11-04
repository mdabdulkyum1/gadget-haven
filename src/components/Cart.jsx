import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Cart({ cart }) {
  const { product_id, product_title, category, product_image, price } = cart;
  return (
    <div className="shadow-md p-6 space-y-6">
      <div className="">
        <img src={product_image} alt={product_title} />
      </div>
      <div className="space-y-4">
        <h1 className="text-xl font-bold">{product_title}</h1>
        <p>{category}</p>
        <p className="">Price: ${price}</p>
        <Link to={`cart/${product_id}`} >
          <button className="btn">View Details</button>
        </Link>
      </div>
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
};

export default Cart;
