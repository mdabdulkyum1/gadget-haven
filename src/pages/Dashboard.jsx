import ReusableBanner from "./../components/ReusableBanner";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyCarts from "../components/MyCarts";
import Wishlists from "../components/Wishlists";
import { Helmet } from "react-helmet-async";
import {  createContext, useEffect, useState } from "react";
import { getAddToCardList } from "../utility/localDb";
import { useLoaderData } from "react-router-dom";

export const CartContext = createContext({})

function Dashboard() {

  const [selected, setSelected] = useState([]);

  const data = useLoaderData();

  useEffect(()=> {

    if(selected){
      const lsCardsId = getAddToCardList();
    if(data.length === 0){
      return;
    }else{
      const current = data.filter(d => lsCardsId.includes(d.product_id))
        setSelected(current);
    }
    }else{
      return;
    }

    
  },[data])

  const handelSort = () => {

    const sorted = [...selected].sort((a,b) =>   b.price - a.price); 
      setSelected(sorted)
  }

  return (
    <>
    <Helmet>
      <title>Dashboard | Gadget Heaven</title>
    </Helmet>
    <div className="bg-purple text-white">
      <div className="">
        <ReusableBanner>
          <div className="text-center py-14">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="w-1/2 mx-auto mt-4">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </ReusableBanner>
      </div>
      <CartContext.Provider value={{selected, setSelected, handelSort}}>

      <div className="">
        <Tabs>
          <TabList className="flex justify-center">
            <Tab className="bg-transparent w-[15%] text-center border rounded-3xl py-3 px-9">Cart</Tab>
            <Tab className="bg-transparent  w-[15%] text-center border rounded-3xl py-3 px-9">Wishlist</Tab>
          </TabList>

          <TabPanel className="bg-white text-black">
            <MyCarts></MyCarts>
          </TabPanel>
          <TabPanel className="bg-white text-black">
            <Wishlists></Wishlists>
          </TabPanel>
        </Tabs>
      </div>
      </CartContext.Provider>
    </div>
    </>
  );
}

export default Dashboard;
