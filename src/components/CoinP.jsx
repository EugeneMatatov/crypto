import React from "react";
import { Link } from "react-router-dom";
const CoinP =({ coin, deleteCoin }) => {
  return (
    coin.price>0?
   
      <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
      
        <span className="text-decoration-none">{coin.name}</span>
        <span className="text-decoration-none">{
          (coin.price >0.000001 && coin.price>0) ?Number.parseFloat(coin.price).toFixed(6)
          :"<0.000001"
        }</span>
     
     <span className="text-decoration-none">кол-во: 
       {coin.quantity}
    
       </span>
        
       
      <span > <p>сумма: {(Number.parseFloat(coin.quantity)*coin.price).toFixed(2)}</p>
        
      </span>
      <span ><p>NIS: {(Number.parseFloat(coin.quantity)*coin.price).toFixed(2)}</p>  
        
      </span>
       
          
      
     
      </li>
      
   
    :""
  );
};

export default CoinP;
