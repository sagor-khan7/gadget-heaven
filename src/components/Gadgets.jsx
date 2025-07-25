import { useEffect, useState } from "react";
import Gadget from "./Gadget";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);
  return (
    <div className="mt-10 sm:mt-96">
      <h2 className="text-[40px] font-bold text-center mb-10">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gadgets.map((gadget) => (
          <Gadget key={gadget.id} gadget={gadget} />
        ))}
      </div>
    </div>
  );
};

export default Gadgets;
