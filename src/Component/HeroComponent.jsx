import pic1 from "../assets/pic1.png"
import small from "../assets/small.png"
import { IoIosArrowRoundForward } from "react-icons/io";
const HeroComponent=()=>{
    return(<>
    <div className=" bg-cover w-full h-[700px] object-cover " style={{ backgroundImage: "url('/src/assets/pic1.png')" }}>
    <p className="font-inter text-[#F5F0E8] max-w-90  ml-30 pt-10 sm:text-base" >Summer 2024 Collection</p>
    <p className="md:ml-30  text-[#F5F0E8] font-bodonimoda md:text-8xl  text-7xl  font-medium md:text-left md:max-w-140 sm:w-50 md:h- ">Dressed for the considered life.</p>
<p className="font-inter text-[#F5F0E8] sm:text-base max-w-90 md:text-md md:ml-30">Natural fibres, thoughtful construction, enduring pieces. Nothing excess.</p>
<div className="flex gap-x-10">
<button className="flex text-left md:ml-30 outline-2 py-3 px-3 bg-[#F5F0E8] outline-[#F5F0E8] mt-4 font-inter hover:bg-white hover:outline-white">
   <span className="text-xl">shop now </span> <IoIosArrowRoundForward className="mt-1 text-xl"/>
    </button>
    <button className="outline-1 px-10 outline-[#F5F0E8] text-[#F5F0E8] font-inter text-xl py-0">New in</button>
    </div>
    </div>
    
    </>)
} 
export default HeroComponent;