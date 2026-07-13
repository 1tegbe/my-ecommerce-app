import NavbarComponent from "../Component/NavbarComponent";

import {ShopContext} from "../Context/ShopContext"
const ProductPage = () => {
  const {productData} = useContext(ShopContext);
console.log(productData);
  return (
    <>
    
      <div>
     {}
      </div>
    </>
  );
};

export default ProductPage;
