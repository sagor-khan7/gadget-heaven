import banner from "../assets/banner.jpg";

const Hero = () => {
  return (
    <div className="relative bg-[#9538E2] text-white flex flex-col items-center pt-12 pb-32 md:pb-96 rounded-b-2xl px-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight md:leading-[72px] max-w-6xl mx-auto text-center pb-6">
        Upgrade Your Tech Accessories with Gadget Heaven Accessories
      </h1>

      <p className="max-w-2xl sm:max-w-3xl mx-auto text-center text-base sm:text-lg">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>

      <button className="bg-white text-[#9538E2] font-bold py-2 px-6 rounded-full text-center mt-6 hover:bg-gray-200 transition-colors">
        Shop Now
      </button>

      <div className="mt-10 md:hidden">
        <img
          className="rounded-2xl w-full max-w-md mx-auto"
          src={banner}
          alt="Gadget Heaven Banner"
        />
      </div>

      <div className="absolute hidden md:flex w-[700px] lg:w-[850px] -bottom-80 left-1/2 transform -translate-x-1/2 rounded-4xl border-4 border-white bg-[#FFFFFF4D] p-6">
        <img
          className="rounded-4xl w-full h-auto"
          src={banner}
          alt="Gadget Heaven Banner"
        />
      </div>
    </div>
  );
};

export default Hero;
