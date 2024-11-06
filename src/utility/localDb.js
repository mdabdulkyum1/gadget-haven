import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const getAddToCardList = () => {
    const cardsItem = localStorage.getItem('carts');

    if(cardsItem){
        return JSON.parse(cardsItem);
    }
    else{
        return [];
    }
}

// set to current cart id 

const setCartId = id => {
    const cartItems = getAddToCardList();

    if(cartItems.includes(id)){
        console.log("already exists");
    }
    else{
        addCartNotify()
        cartItems.push(id);
        localStorage.setItem('carts', JSON.stringify(cartItems));
    }
}

// tost
const addCartNotify = () => {
    toast.success('Added to card', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}

const handelRemoveItem = (id) => {
    removeCartNotify();
    const existItem = getAddToCardList();

    const remaining = existItem.filter(item => item !== id);

     localStorage.setItem('carts', JSON.stringify(remaining))

     if(Array.isArray(id)){
        localStorage.setItem('carts', JSON.stringify(id))
     }
}
const removeCartNotify = () => {
    toast.info('Remove to card', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}

//  remove notify


/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                            Wishlist
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/ 

const getAddToWishlist = () => {
    const wishlistItem = localStorage.getItem('wishlist');

    if(wishlistItem){
        return JSON.parse(wishlistItem);
    }
    else{
        return [];
    }
}

const setWishlist= id => {
    const wishlistItems = getAddToWishlist();

    if(wishlistItems.includes(id)){
        console.log("already exists");
    }
    else{
        addWishNotify()
        wishlistItems.push(id);
        localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    }
}
const addWishNotify = () => {
    toast.success('Added to your Wishlists', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}
const handelRemoveWishlistItem = (id) => {
    removeWishNotify();
    const existItem = getAddToCardList();

    const remaining = existItem.filter(item => item !== id);

     localStorage.setItem('wishlist', JSON.stringify(remaining))

    //  if(Array.isArray(id)){
    //     localStorage.setItem('wishlist', JSON.stringify(id))
    //  }

}
const removeWishNotify = () => {
    toast.info('Remove from your Wishlists', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}

export { setCartId , getAddToCardList, handelRemoveItem, getAddToWishlist, setWishlist, handelRemoveWishlistItem}