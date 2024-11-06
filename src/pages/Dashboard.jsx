import ReusableBanner from "./../components/ReusableBanner";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyCarts from "../components/MyCarts";
import Wishlists from "../components/Wishlists";
import { Helmet } from "react-helmet-async";

function Dashboard() {
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
    </div>
    </>
  );
}

export default Dashboard;
