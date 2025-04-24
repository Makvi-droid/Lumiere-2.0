import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import {Link} from 'react-router-dom';

function ProductItem({id, image, name, price}){
    
    const {currency} = useContext(ShopContext);

    return(
        <>
            <Link to={`/product/${id}`}>
           
            </Link>
        </>
    );
}

export default ProductItem;