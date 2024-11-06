import { useContext, useEffect, useState } from "react";
import { handelRemoveItem } from "../utility/localDb";
import GroupPng from "../assets/Group.png";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../pages/Dashboard";

function MyCarts() {
  const { selected, setSelected, handelSort } = useContext(CartContext);

  const [total, setTotal] = useState(0);
  const [purchaseTotal, setPurchaseTotal] = useState(0); 
  const [isOpen, setIsOpen] = useState(false);
  
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const navigate = useNavigate();

  useEffect(() => {
    const totalPrice = [...selected].reduce((acc, curr) => acc + curr.price, 0);
    setTotal(totalPrice);
  }, [selected]);

  const handelClose = (id) => {
    handelRemoveItem(id);
    const remaining = [...selected].filter((item) => item.product_id !== id);
    setSelected(remaining);
  };

  const handelEmpty = () => {
    setSelected([]);
    handelRemoveItem([]);
  };

  const handlePurchase = () => {
    setPurchaseTotal(total); 
    openModal();
    handelEmpty();
  };

  return (
    <div className="">
      <div className="bg-purple h-10"></div>

      <div className="w-10/12 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between my-9">
          <div className="">
            <h3 className="font-bold text-xl">Cart: {selected.length}</h3>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <h1 className="text-3xl font-bold">Total: cost ${total}</h1>
            <span className="bg-gradient-to-br from-fuchsia-500 to-rose-500 p-[1px] inline-block rounded-3xl">
              <button onClick={handelSort} className="bg-white btn rounded-3xl">
                <div className="flex items-center gap-2">
                  <span>Sort By Price</span>
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="6"
                        y1="4"
                        x2="6"
                        y2="20"
                        stroke="#7D3CC0"
                        strokeWidth="2"
                      />
                      <circle cx="6" cy="8" r="2" fill="#7D3CC0" />
                      <line
                        x1="12"
                        y1="4"
                        x2="12"
                        y2="20"
                        stroke="#7D3CC0"
                        strokeWidth="2"
                      />
                      <circle cx="12" cy="16" r="2" fill="#7D3CC0" />
                      <line
                        x1="18"
                        y1="4"
                        x2="18"
                        y2="20"
                        stroke="#7D3CC0"
                        strokeWidth="2"
                      />
                      <circle cx="18" cy="12" r="2" fill="#7D3CC0" />
                    </svg>
                  </span>
                </div>
              </button>
            </span>

            {/* Purchase Button with Popup */}
            <div>
              <button
                onClick={handlePurchase} 
                className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white inline-block rounded-3xl btn"
              >
                Purchase
              </button>

              <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Payment Success"
                className="bg-white p-8 rounded-md shadow-lg w-11/12 max-w-md mx-auto mt-10"
                overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center"
              >
                <div className="p-6 text-center h-[268px] w-[368px] mx-auto">
                  <div className="flex justify-center mb-4">
                    <img src={GroupPng} alt="Success" />
                  </div>
                  <h1 className="text-xl font-semibold mb-2">
                    Payment Successfully
                  </h1>
                  <hr className="border-gray-300 mb-2" />
                  <p className="text-gray-600 mb-1">Thanks for purchasing.</p>
                  <p className="text-gray-600 mb-4">Total: ${purchaseTotal}</p> 
                
                  <button
                    onClick={() => {
                      navigate("/");
                      closeModal();
                    }}
                    className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full w-full"
                  >
                    Close
                  </button>
                </div>
              </Modal>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {selected.map((gadget) => (
            <div key={gadget.product_id} className="flex gap-6 p-6 shadow-md">
              <div className="w-1/5">
                <img
                  src={gadget.product_image}
                  alt={gadget.product_title}
                  className=""
                />
              </div>
              <div className="flex-grow space-y-3">
                <h1 className="text-2xl font-bold">{gadget.product_title}</h1>
                <p>{gadget.description}</p>
                <h3 className="font-bold">Price: ${gadget.price}</h3>
              </div>
              <div className="">
                <button onClick={() => handelClose(gadget.product_id)}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="4"
                      y1="4"
                      x2="20"
                      y2="20"
                      stroke="red"
                      strokeWidth="2"
                    />
                    <line
                      x1="4"
                      y1="20"
                      x2="20"
                      y2="4"
                      stroke="red"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyCarts;
