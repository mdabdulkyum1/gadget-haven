import { Helmet } from "react-helmet-async";
import ReusableBanner from "./../components/ReusableBanner";

function Statistics() {
  return (
    <>
    <Helmet>
        <title>Statistics | Gadget Heaven</title>
    </Helmet>
    <div className="">
      <div className="">
        <ReusableBanner>
          <div className="bg-purple text-white text-center py-14">
            <h1 className="text-3xl font-bold">Statistics</h1>
            <p className="w-1/2 mx-auto mt-4">
              Explore the latest that will take your experience to the next
              level. From smart devices to the coolest we have it all!
            </p>
          </div>
        </ReusableBanner>
      </div>
        <h1 className="font-bold text-2xl mt-5">Statistics</h1>
        <div className="my-16">
            <h1 className="text-purple font-bold text-4xl text-center">No Data to Show Statistics</h1>
        </div>
    </div>
    </>
  );
}

export default Statistics;
