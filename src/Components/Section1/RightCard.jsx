import React from 'react'
import { Users, UserStar, ArrowUpRight } from "lucide-react";

const RightCard = () => {
  return (
    
      <div className="flex flex-wrap gap-4 mt-10">

        <div className="bg-red-500/15 rounded-3xl p-4 w-[140px] sm:w-[150px] hover:scale-105 transition cursor-pointer">
          <p className="text-xs sm:text-sm">Happy People</p>
          <div className="flex justify-between items-center mt-4">
            <h1 className="text-lg sm:text-xl font-bold">3L+</h1>
            <Users />
          </div>
        </div>

        <div className="bg-red-500/15 rounded-3xl p-4 w-[140px] sm:w-[150px] hover:scale-105 transition cursor-pointer">
          <p className="text-xs sm:text-sm">Client Rating</p>
          <div className="flex justify-between items-center mt-4">
            <h1 className="text-lg sm:text-xl font-bold">95%</h1>
            <UserStar />
          </div>
        </div>

        <div className="bg-red-500/15 rounded-3xl p-4 w-[140px] sm:w-[150px] hover:scale-105 transition cursor-pointer">
          <p className="text-xs sm:text-sm">Growth</p>
          <div className="flex justify-between items-center mt-4">
            <h1 className="text-lg sm:text-xl font-bold">88%</h1>
            <ArrowUpRight />
          </div>
        </div>

    </div>
  )
}

export default RightCard
