import { Outlet, useLoaderData } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getAddToCardList, getAddToWishlist } from "../utility/localDb";
import { createContext } from "react";
import { ToastContainer } from "react-toastify";

// Context api here
export const SelectedData = createContext({});

export const WishListContext = createContext({});

function Root() {
  const [selected, setSelected] = useState([]);
  const [wishlists, setWishlists] = useState([]);

  const data = useLoaderData();

  useEffect(() => {
    const lsCardsId = getAddToCardList();
    if (data.length === 0) {
      return;
    } else {
      const current = data.filter((d) => lsCardsId.includes(d.product_id));
      setSelected(current);
    }
  }, [data]);

  // setWishlist

  useEffect(() => {
    const wishlist = getAddToWishlist();
    if (data.length === 0) {
      return;
    } else {
      const current = data.filter((d) => wishlist.includes(d.product_id));
      setWishlists(current);
    }
  }, [data]);

  const handelSort = () => {
    const sorted = [...selected].sort((a, b) => b.price - a.price);
    setSelected(sorted);
  };

  return (
    <WishListContext.Provider value={{ wishlists, setWishlists }}>
      <SelectedData.Provider value={{ selected, setSelected, handelSort }}>
        <div className="">
          {/* navbar here */}
          <NavBar />
          {/* Outlet here */}
          <Outlet />
          {/* Footer */}
          <Footer />
        </div>
        <ToastContainer></ToastContainer>
      </SelectedData.Provider>
    </WishListContext.Provider>
  );
}

export default Root;
