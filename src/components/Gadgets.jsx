import { useEffect, useState } from "react";
import Cart from "./Cart";

function Gadgets() {
  const [gadgets, setGadgets] = useState([]);
  const [categoryBy, setCategoryBy] = useState([]);
  const [categoryName, setCategoryName] = useState("all");

  const [categories, setCategories] = useState([]);
  const [isActive, setIsActive] = useState("all");

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  const handelC = (value) => {
    setCategoryName(value);
  };

  useEffect(() => {
    const current = [...gadgets];

    if (categoryName === "all") {
      setCategoryBy(gadgets);
    } else {
      const currents = current.filter((cu) => {
        return cu.category === categoryName;
      });

      setCategoryBy(currents);
    }

  }, [gadgets, categoryName]);

  return (
    <>
      <div id="gadget" className="-mt-24 mb-12">
        <h1 className="text-center text-4xl font-bold mb-6">
          Explore Cutting-Edge Gadgets : {gadgets.length}
        </h1>
        <div className=" lg:flex justify-center gap-6">
          <div className="shadow-md p-6 lg:w-[15%]">
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsActive("all");
                  handelC("all");
                }}
                className={`${
                  isActive === "all" ? "bg-purple text-white" : "bg-base-300"
                } py-2 rounded-3xl px-5 text-left`}
              >
                All Product
              </button>
              {categories.map((c) => (
                <button
                  key={c.category_id}
                  className={`${
                    isActive === c.category_id
                      ? "bg-purple text-white"
                      : "bg-base-300"
                  }  py-2 rounded-3xl px-5 text-left`}
                  onClick={() => {
                    setIsActive(c.category_id);
                    handelC(c.category_name);
                  }}
                >
                  {c.category_name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-4 lg:ml-0 w-5/6">
            {categoryBy.length ? (
              categoryBy.map((gadget) => (
                <Cart key={gadget.product_id} cart={gadget}></Cart>
              ))
            ) : (
              <div>
                {" "}
                <h1 className="font-bold text-4xl">No Data Found</h1>{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Gadgets;
