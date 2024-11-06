import ReactStars from "react-rating-stars-component";
import { useLoaderData, useParams } from "react-router-dom";
import ReusableBanner from "../components/ReusableBanner";
import { setCartId, setWishlist } from "../utility/localDb";
import { useState } from "react";




function ProductDetails() {

  const [wishlistsBtn, setWishlistsBtn] = useState(false);

  const products = useLoaderData();
  const param = useParams();

  const gadget = products.find((product) => product.product_id === param.id);
  const {
    product_id,
    product_title,
    product_image,
    price,
    description,
    specification,
    rating,
  } = gadget;


 const handelAddToCard = (id) => {
      setCartId(id)
 }
 const handelAddToWishlist = (id) => {
   setWishlist(id)
   setWishlistsBtn(true)
 }

  return (
    <div>
      <div className="">
        <ReusableBanner>
          <div className="bg-purple text-white text-center py-14 pt-11 pb-44">
            <h1 className="text-3xl font-bold">Product Details</h1>
            <p className="w-1/2 mx-auto mt-4">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </ReusableBanner>
        <div className="w-2/3 mx-auto p-6 -translate-y-[150px] bg-white rounded-lg">
          <div className="flex gap-7">
            <div className="w-10/12">
              <img
                src={product_image}
                alt={product_title}
                className="h-full w-full rounded-lg"
              />
            </div>
            <div className="">
              <div className="space-y-3">
                <h1 className="text-xl font-bold">{product_title}</h1>
                <p className="font-bold">Price: ${price}</p>
                <span className="inline-block border border-green-600 py-2 px-5 bg-green-100 text-green-700 font-bold rounded-3xl">
                  In Stock
                </span>
              </div>
              <p className="my-4">{description}</p>
              <div className="">
                <h2 className="text-xl font-extrabold mb-4">Specification:</h2>
                <ol className="list-decimal ml-8 space-y-3">
                  {specification.map((spe, idx) => (
                    <li key={idx}>{spe}</li>
                  ))}
                </ol>
              </div>
              <div className="mt-5">
                <h3>Rating</h3>
                <div className="flex items-center gap-4">
                  <span>
                    <ReactStars
                      count={5}
                      value={parseFloat(rating)}
                      size={24}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                      edit={false}
                    />
                  </span>
                  <span className="bg-base-300 rounded-3xl py-2 px-3">
                    {rating}
                  </span>
                </div>
              </div>
              <div className="my-4
               flex  gap-6 ">
                <button onClick={()=> {
                    handelAddToCard(product_id)
                }} className="btn bg-purple text-white font-bold rounded-3xl ">
                  <div className="flex items-center gap-3">
                      <span>Add to Card</span>
                      <span> <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg></span>
                  </div>
                </button>

                <button onClick={()=> {
                  handelAddToWishlist(product_id)
                } } disabled={wishlistsBtn}
                 className="btn rounded-full border border-gray-500">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill={wishlistsBtn === true ? 'purple' : 'white'}
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
