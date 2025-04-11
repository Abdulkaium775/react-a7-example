import { BellRing } from "lucide-react";

export default function Navbar(){
return (
    
    <nav className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center text-black">
      <div className="text-xl font-semibold">
        <span className="text-blue-600">Auction</span>
        <span className="text-yellow-500">Gallery</span>
      </div>
      <div className="flex gap-8 text-sm font-medium">
        <a href="#" className="hover:text-gray-600">Home</a>
        <a href="#" className="hover:text-gray-600">Auctions</a>
        <a href="#" className="hover:text-gray-600">Categories</a>
        <a href="#" className="hover:text-gray-600">How to works</a>
      </div>
      <div className="flex items-center gap-4">
        <div className="p-2 rounded-full bg-blue-50">
            <div className="relative bg-gray-200 p-1 rounded-2xl">
            <div className="absolute bg-black w-4 h-4 p-1 top-[-3px] left-[22px] rounded-full">
            </div>
            <div className="text-white text-[12px] font-medium absolute z-10  top-[-5px] left-[27px]">3</div>
          <BellRing className="h-5 w-5 text-black-600" />
            </div>
        </div>
        <img
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          alt="User Avatar"
          className="h-8 w-8 rounded-full object-cover"
        />
      </div>
    </nav>
)
}