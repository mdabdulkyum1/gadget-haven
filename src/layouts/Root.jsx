import { Outlet, useLoaderData } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getAddToCardList } from "../utility/localDb";
import { createContext } from 'react';

  // Context api here
export const SelectedData = createContext(null)


function Root() {

  const [selected, setSelected] = useState([]);
 
 const data = useLoaderData();
  
useEffect(()=> {
  const lsCardsId = getAddToCardList();
  if(data.length === 0){
    return;
  }else{
    const current = data.filter(d => lsCardsId.includes(d.product_id))
      setSelected(current);
  }
} ,[data])




  return (
<SelectedData.Provider value={{selected, setSelected}}>
    <div className="">
      {/* navbar here */}
      <NavBar />
      {/* Outlet here */}
      <Outlet />
      {/* Footer */}
      <Footer />
    </div>

</SelectedData.Provider>


  );
}

export default Root;
