import React from 'react' 
import {createContext} from 'react'
import {productData} from '../assets/data.jsx'
export const ShopContext=createContext();
function ShopContextprovider ({children}) {
    const currency="$";
    const delivery_fee=10;
    const value={
        productData,currency,delivery_fee
    }
  return (
  <ShopContext.Provider value={value}>
        {children}
  </ShopContext.Provider>

  )
}

export default ShopContextprovider