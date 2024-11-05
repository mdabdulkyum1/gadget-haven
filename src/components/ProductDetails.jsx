import { useLoaderData, useParams } from "react-router-dom";
import ReusableBanner from "./ReusableBanner";

function ProductDetails() {
  const products = useLoaderData();
  const param = useParams();

  const gadget = products.find((product) => product.product_id === param.id);
  const { product_title } = gadget;

  return (
    <div>
      <div className="">
        <ReusableBanner>
          <div className="bg-purple text-white text-center py-14 pt-11 pb-28">
            <h1 className="text-3xl font-bold">Product Details</h1>
            <p className="w-1/2 mx-auto mt-4">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
          </div>
        </ReusableBanner>
        <div className="p-6">
            <div className="">
                <img src="" alt="" />
            </div>
            <div className="">
                <h1>{product_title}</h1>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
