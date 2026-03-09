
import RightCard from "./RightCard";

const Right = () => {
  return (
    <div className="text-white w-full">

      {/* Badge */}
      <div className="bg-gray-700/40 hover:bg-red-600 transition rounded-full w-fit px-4 py-2 text-xs sm:text-sm cursor-pointer">
        AI Driven Agency
      </div>

      {/* Heading */}
      <div className="mt-6">

        <div className="flex items-start gap-3 sm:gap-4">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Your AI
          </h1>

          <p className="text-xs sm:text-sm md:text-lg">
            from idea <br /> to launch
          </p>

        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3">
          Sprint Team
        </h1>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          On Demand
        </h1>

      </div>

      {/* Paragraph */}
      <p className="mt-6 text-gray-300 text-sm sm:text-base max-w-xl">
        From discovery to deployment we plug into your stack
        to prototype validation and launch AI experiences
        your users actually love.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-8">

        <button className="px-5 py-2 text-sm sm:text-base rounded-xl bg-gray-700/40 hover:bg-red-600 hover:scale-105 transition">
          Explore Service
        </button>

        <button className="px-5 py-2 text-sm sm:text-base rounded-xl bg-gray-700/40 hover:bg-red-600 hover:scale-105 transition">
          View Pricing Plans
        </button>

      </div>

      {/* Stats */}
      <RightCard/>
      
      </div>

    
  );
};

export default Right;