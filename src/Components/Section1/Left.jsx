import { Link, Link2 } from "lucide-react";

const Left = () => {
  return (
    <div className="w-full flex justify-center lg:justify-end">

      <div className="flex flex-col gap-6 w-full max-w-sm text-white">

        {/* Card 1 */}
        <div className="rounded-3xl bg-red-500/25 shadow-md p-3 hover:scale-105 transition">

          <div
            className="rounded-2xl p-4 bg-cover bg-center h-52 sm:h-56 md:h-60 flex flex-col justify-between"
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/736x/f0/b1/af/f0b1af6bbd87da2ad46fe96e2d88a7ba.jpg)",
            }}
          >

            <h1 className="flex justify-between text-sm sm:text-lg">
              AgentAi <span>01:04</span>
            </h1>

            <div>
              <h1 className="font-bold text-2xl sm:text-3xl">230+</h1>
              <p className="text-xs sm:text-sm">
                Projects successfully delivered
              </p>
            </div>

          </div>

        </div>

        {/* Card 2 */}
        <div className="rounded-3xl bg-red-500/25 shadow-md p-4 hover:scale-105 transition">

          <h1 className="text-2xl sm:text-3xl">
            400+
            <br />
            <span className="text-sm">Trusted People</span>
          </h1>

          <div className="flex gap-6 mt-6">
            <Link className="h-5 w-5"/>
            <Link2 className="h-5 w-5"/>
          </div>

          <button className="bg-red-600 px-6 py-2 mt-6 rounded-2xl hover:scale-110 transition text-sm">
            Book Now
          </button>

        </div>

      </div>

    </div>
  );
};

export default Left;