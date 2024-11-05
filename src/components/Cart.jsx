import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Cart({ cart }) {
  const { product_id, product_title, category, product_image, price } = cart;
  return (
    <div className="shadow-md p-6 space-y-6">
      <div className="w-[282px] bg-base-300 ">
        <img src={product_image} alt={product_title} className="w-full h-[200px] object-cover rounded-md" />
      </div>
      <div className="space-y-4">
        <h1 className="text-xl font-bold">{product_title}</h1>
        <p>{category}</p>
        <p className="">Price: ${price}</p>
          <div className="mt-3">
          <Link to={`cart/${product_id}`} >
        <span className="bg-gradient-to-br from-fuchsia-500 to-rose-500 p-[1px] inline-block rounded-3xl">
          <button className="btn rounded-3xl">View Details</button>
        </span>
        </Link>
          </div>
      </div>
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
};

export default Cart;
