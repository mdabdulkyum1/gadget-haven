import { useContext } from "react"
import { WishListContext } from "../layouts/Root"
import { handelRemoveWishlistItem, setCartId } from "../utility/localDb"
import { WishContext } from "../pages/Dashboard"


function Wishlists() {

  const { wish, setWish } = useContext(WishContext)

  const {wishlists, setWishlists} = useContext(WishListContext)
  const handelClose = (id) => {
    handelRemoveWishlistItem(id)
    const remaining = wishlists.filter(item=> item.product_id !== id);
    setWishlists(remaining)
    
    if(wish){
      
      const remaining = wish.filter(item=> item.product_id !== id);
      handelRemoveWishlistItem(id)
      setWish(remaining);
    }
  }
  const handelAddToCart = id => {
    setCartId(id)
  }

  return (
    <div className="">
    <div className="bg-purple h-10"></div>

    <div className="w-10/12 mx-auto">
      <div className="flex items-center justify-between my-9">
        <div className="">
          <h3 className="font-bold text-xl">Wishlist</h3>
        </div>
      </div>

      <div className="space-y-6">
      

{
  wish.map(item=> (<div key={item.product_id} className="flex gap-6 p-6 shadow-md">
    <div className="w-1/5">
      <img src={item.product_image} alt="products" />
    </div>
    <div className="flex-grow space-y-3">
      <h1 className="text-2xl font-bold">{item.product_title}</h1>
      <p>
       {item.description}
      </p>
      <h3 className="font-bold">Price: ${item.price}</h3>
      <div className="">
      <button onClick={()=> {
              handelAddToCart(item.product_id)
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
      </div>
    </div>
    <div className="">
      <button onClick={()=> handelClose(item.product_id)} title="Close">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="4"
            y1="4"
            x2="20"
            y2="20"
            stroke="red"
            strokeWidth="2"
          />
          <line
            x1="4"
            y1="20"
            x2="20"
            y2="4"
            stroke="red"
            strokeWidth="2"
          />
        </svg>
      </button>
    </div>
  </div>))
}

        
        
       

      </div>
    </div>
  </div>
  )
}

export default Wishlists