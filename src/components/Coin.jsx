import React from "react";
import { Link } from "react-router-dom";

const Coin = ({ coin, deleteCoin }) => {
 



  return (
    <Link to={`/coins/${coin.id}`} className="text-decoration-none my-1 coin">
      <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
      <img className="coinlist-image" src={coin.image} alt="" />
        <span className="text-decoration-none">{coin.name}</span>
        
      
        <span className="text-decoration-none">
       
        </span>
        <span
          className={
            coin.price_change_24h < 0
              ? "text-danger mr-2"
              : "text-success mr-2"
          }
        >
 
          <span className="text-decoration-none">
 {coin.price_change_24h < 0 ? (
            <i className="fas fa-sort-down align-middle mr-1">

              {coin.price_change_percentage_24h.toFixed(1)}%
            </i>
          ) : (
            <i className="fas fa-sort-up align-middle mr-1">
               {coin.price_change_percentage_24h}%
            </i>
          )}
        

          </span>
        
         
          
        </span>
        <span className="text-decoration-none">
        кол-во: {coin.quantity}
        </span>
        <span className="text-decoration-none">цена: 
         {
          (coin.current_price >0.01 && coin.current_price>0) ?Number.parseFloat(coin.current_price).toFixed(2)
          :"<0.01"
        }
         </span>
        <span className="text-decoration-none">
       сумма USD: {(coin.quantity*coin.current_price).toFixed(2)}
        </span>
        <span className="text-decoration-none">
        NIS: {(coin.quantity*coin.current_price*3.11).toFixed(2)}
        </span>
      </li>
      
    </Link>
    
  );
};

export default Coin;
