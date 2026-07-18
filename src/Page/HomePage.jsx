import HeroComponent from "../Component/HeroComponent"
import {useState,useEffect  } from "react";
const HomePage=()=>{
    const [loading,setloading]=useState(true)
    useEffect(()=>{
        setTimeout(() => {
            setloading(false)
        }, 5000);
    })
    return(<>
    {loading?<p className=" animate-spin w-5 h-5  rounded-full ">..</p>:<HeroComponent/>}
    
    
    </>)
}
export default HomePage;