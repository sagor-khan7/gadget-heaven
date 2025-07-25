const Gadget = ({ gadget }) => {
  const { title, image, price } = gadget;
  return (
    <div className="p-5 bg-white rounded-xl">
      <img className="h-60 w-full rounded-xl" src={image} alt="" />
      <h4 className="text-2xl font-semibold my-6">{title}</h4>
      <p className="text-xl font-medium text-[#09080F99]">Price: ${price}</p>
      <button className="bg-white border-2 border-[#9538E2] text-[#9538E2] font-bold py-2 px-6 rounded-full text-center mt-6 hover:bg-gray-200 transition-colors">
        View Details
      </button>
    </div>
  );
};

export default Gadget;
