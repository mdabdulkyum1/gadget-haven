import Banner from "../components/Banner";
import Gadgets from "../components/Gadgets";


import { Helmet } from 'react-helmet-async';



function Home() {




  return (
    <>
      <Helmet>
        <title>Home | Gadget Heaven</title>
      </Helmet>

      <Banner></Banner>
      <Gadgets></Gadgets>
    </>
  );
}

export default Home;
