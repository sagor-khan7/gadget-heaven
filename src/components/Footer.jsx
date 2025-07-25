const Footer = () => {
  return (
    <footer className="py-24 px-5 md:px-0">
      <h2 className="text-[32px] font-bold text-center">Gadget Heaven</h2>
      <p className="text-center font-medium text-[#09080F99] mt-3 mb-8">
        Leading the way in cutting-edge technology and innovation.
      </p>
      <div className="border-b border-[#09080F1A]"></div>

      <div className="sm:flex justify-around mt-10">
        <div>
          <h5 className="text-lg font-bold mb-5">Services</h5>
          <ul className="text-[#09080F99] ">
            <li className="mb-2">Product Support</li>
            <li className="mb-2">Order Tracking</li>
            <li className="mb-2">Shipping & Delivery</li>
            <li className="mb-2">Returns</li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-bold mb-5">Company</h5>
          <ul className="text-[#09080F99] ">
            <li className="mb-2">About Us</li>
            <li className="mb-2">Career</li>
            <li className="mb-2">Contact</li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-bold mb-5">Legal</h5>
          <ul className="text-[#09080F99] ">
            <li className="mb-2">Terms of Service</li>
            <li className="mb-2">Privacy Policy</li>
            <li className="mb-2">Cookie Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
