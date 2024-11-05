import { Outlet, useLoaderData } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getAddToCardList } from "../utility/localDb";


  // Context api here



function Root() {

  const [c , setC] = useState([])

  const data = useLoaderData();
  
useEffect(()=> {
  const lsCardsId = getAddToCardList();
  setC(lsCardsId)
  const current = data.filter(d => lsCardsId.includes(d.product_id))
  console.log(current)
  // console.log(lsCardsId)
} ,[])

console.log(c)

  return (

    <div className="">
      {/* navbar here */}
      <NavBar />
      {/* Outlet here */}
      <Outlet />
      {/* Footer */}
      <Footer />
    </div>


  );
}

export default Root;
