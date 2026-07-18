import NavbarComponent from "../Component/NavbarComponent";
import {useContext} from "react"
import {ShopContext} from "../Context/ShopContext"
const ProductPage = () => {
  const {productData} = useContext(ShopContext);
console.log(productData);
  return (
    <>
    
      <div className="flex flex-4 flex-col mx-auto">
     {productData && productData.map((item,id)=>{ return(
      
      <div key={id} className="flex flex-col w-100">
        <img src={item.image} alt={item.name}  />
        <div className="text-center font-CormorantGaramond">{item.name}</div>
        <div>{item.price}</div>
      </div>)
     })}
      </div>
    </>
  );
};

export default ProductPage;
