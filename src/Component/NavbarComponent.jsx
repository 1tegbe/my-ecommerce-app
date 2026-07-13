import {useState} from "react";
import { CiUser,CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import {Link} from "react-router-dom";
const NavbarComponent=()=>{
    const[search,setsearch]=useState(false)
    const[Isclose,setIsclose]=useState(true)
    const [OpenMenu,setOpenMenu]= useState(false)
    return(<>
    <div className="sticky ">
        <header className={`bg-[#24211D] w-full md:h-10  flex flex-row justify-center block ${Isclose ?"block":"hidden"}`}>
            <p className="text-center sm:text-base text-[#F5F0E8] pt-2 font-inter ">Free shipping on orders over £150 — Use code SUMMER24 </p> <IoIosClose className="text-white text-2xl " onClick={()=>{setIsclose(false)}}/>
        </header>
<nav className="flex flex-row   font-medium py-5 bg-[#F5F0E8] h-20 shadow-xl">
    <span className="mx-2 font-inter  hidden md:flex text-xl text-[#72685C] pt-2 ">
<p className="mx-2 hover:borber-b pointer-cursor">women</p>
<p className="mx-2 hover:borber-b pointer-cursor">men</p>
</span>
<Link to="/" className="md:text-center font-bold uppercase mx-auto text-4xl text-[#151515] font-CormorantGaramond">Vêtir</Link>
<span className="mx-2 font-inter hidden md:flex text-xl mx-end text-[#72685C] pt-2 ">
<Link to="/product" className="mx-2 hover:borber-b cursor-pointer">New In</Link>
<p  id="" className="mx-2 hover:borber-b cursor-pointer">Sale</p>
<p className="mx-2 hover:borber-b pointer-cursor font-bold flex">
    <input type="text" className={`${search ? "block"  : "hidden"} focus:outline-none hover:outline-none border-b-2 border-black w-fit`}  />
    <CiSearch onClick={()=>{setsearch(!search)}}/>

</p>
<p className="mx-2 hover:borber-b cursor-pointer"><CiUser/></p>

</span>
<HiMenu className="md:hidden block text-4xl mr-5" onClick={()=>{setOpenMenu(!OpenMenu)}}/>
  
</nav>
 {OpenMenu&&(
    <ul className="bg-white font-CormorantGaramond  md:hidden text-black text-center gap-y-3 rounded-xl w-full h-fit ease-in-out duration-300 flex flex-col bg-gray-500">
        <Link to="/product" >Women</Link>
        <Link to="/product">men</Link>
        <Link to="/product">New in</Link>
        <Link to="/product">Sale</Link>
    </ul>
   )}
    </div>
    </>)
}
export default NavbarComponent;