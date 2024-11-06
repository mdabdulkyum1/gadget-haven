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
        cartItems.push(id);
        localStorage.setItem('carts', JSON.stringify(cartItems));
    }
}

const handelRemoveItem = (id) => {
    const existItem = getAddToCardList();

    const remaining = existItem.filter(item => item !== id);

     localStorage.setItem('carts', JSON.stringify(remaining))

     if(Array.isArray(id)){
        localStorage.setItem('carts', JSON.stringify(id))
     }

}


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
        wishlistItems.push(id);
        localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    }
}

const handelRemoveWishlistItem = (id) => {
    const existItem = getAddToCardList();

    const remaining = existItem.filter(item => item !== id);

     localStorage.setItem('wishlist', JSON.stringify(remaining))

    //  if(Array.isArray(id)){
    //     localStorage.setItem('wishlist', JSON.stringify(id))
    //  }

}


export { setCartId , getAddToCardList, handelRemoveItem, getAddToWishlist, setWishlist, handelRemoveWishlistItem}