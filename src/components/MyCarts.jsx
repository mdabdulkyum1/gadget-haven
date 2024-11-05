function MyCarts() {
  return (
    <div className="">
      <div className="bg-purple h-10"></div>

      <div className="w-10/12 mx-auto">
        <div className="flex items-center justify-between my-9">
          <div className="">
            <h3 className="font-bold text-xl">Cart</h3>
          </div>
          <div className="flex items-center gap-10">
            <h1 className="text-3xl font-bold">Total: cost $0</h1>
            <span className="bg-gradient-to-br from-fuchsia-500 to-rose-500 p-[1px] inline-block rounded-3xl">
              <button className="bg-white btn rounded-3xl">
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
            <button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white  inline-block rounded-3xl btn">
              Purchase
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex gap-6 p-6 shadow-md">
            <div className="">
              <img src="" alt="products" />
            </div>
            <div className="flex-grow space-y-3">
              <h1 className="text-2xl font-bold">Samsung Galaxy S23 Ultra</h1>
              <p>
                Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
                display.
              </p>
              <h3 className="font-bold">Price: $999.99</h3>
            </div>
            <div className="">
              <button>
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
          <div className="flex gap-6 p-6 shadow-md">
            <div className="">
              <img src="" alt="products" />
            </div>
            <div className="flex-grow space-y-3">
              <h1 className="text-2xl font-bold">Samsung Galaxy S23 Ultra</h1>
              <p>
                Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
                display.
              </p>
              <h3 className="font-bold">Price: $999.99</h3>
            </div>
            <div className="">
              <button>
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
        </div>
      </div>
    </div>
  );
}

export default MyCarts;
