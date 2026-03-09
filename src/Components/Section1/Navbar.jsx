import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="text-white flex  w-full px-6 py-4">

      
      <div className="text-xl lg:text-2xl mr-[30%] font-bold">
        AgentAI
      </div>

      <div className="hidden lg:flex lg:justify-center gap-6 px-6 py-2 rounded-full bg-gray-700/30 font-bold">

        <a className="px-3 py-1 rounded-full hover:bg-red-700">Home</a>
        <a className="px-3 py-1 rounded-full hover:bg-red-700">Services</a>
        <a className="px-3 py-1 rounded-full hover:bg-red-700">Works</a>
        <a className="px-3 py-1 rounded-full hover:bg-red-700">About</a>
        <a className="px-3 py-1 rounded-full hover:bg-red-700">Contact</a>

      </div>

      
      <button className="flex items-center gap-2 px-4 py-2 bg-red-700 rounded-full lg:hidden">
        Menu <Menu className="h-4 w-4"/>
      </button>

    </div>
  );
};

export default Navbar;