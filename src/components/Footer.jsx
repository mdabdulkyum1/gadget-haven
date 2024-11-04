function Footer() {
  return (
    <footer className="px-6 py-24">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl">Gadget Heaven</h1>
        <p className="text-center mt-3">Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <div className="divider w-3/4 mx-auto"></div>
      <div className="flex flex-col lg:flex lg:flex-row justify-center gap-6 lg:gap-24">
        <ul className="text-center  space-y-3">
          <li className="text-xl font-bold">
            Services
          </li>
          <li>
            <a href="">Prod uct Support</a>
          </li>
          <li>
            <a href="">Order Tracking</a>
          </li>
          <li>
            <a href="">Shipping & Delivery</a>
          </li>
          <li>
            <a href="">Returns</a>
          </li>
        </ul>
        <ul className="text-center  space-y-3">
          <li className="text-xl font-bold">
            Company
          </li>
          <li>
            <a href="">About IJS</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <ul className="text-center  space-y-3">
          <li className="text-xl font-bold">Legal</li>
          <li>
            <a href="">Terms Of Service</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Cookie Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
