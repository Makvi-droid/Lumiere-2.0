import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from './Title';

function LatestCollection(){

    const {products} = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);
    
    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    },[]);

    return(
        <>
            <div className="my-10">
                <div className="text-center py-8 text-3xl">
                    <Title text1={'Latest'} text2={'COLLECTION'}/>
                    <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                

            </div>
        </>
    );
}

export default LatestCollection;