import React, { useEffect, useState, useContext } from "react";
import coinGecko from "../apis/coinGecko";
import { WatchListContext } from "../context/watchListContext";
import Coin from "./Coin";
import CoinP from "./CoinP";
import rawArray from "../context/pairs";
import rawArrayP from "../context/rawArrayP";
import contractList from "../context/contracts";
import axios from 'axios';
const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const [coinsP, setPCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [summ,setSumm]=useState(0)
  const [totalQuantity,setTotalQuantity]=useState(0)
  const { watchList,watchListP } = useContext(WatchListContext);
  const [isLoading, setIsLoading] = useState(false);
 
  const data=[]
  
  
  
   rawArrayP.forEach(el=>{


   })
  rawArray.forEach(el=>{
    const temp=el.split(",")
    const temp2=temp[0].split('\t')
    const node={
        id:temp2[0],
        quantity:temp2[1]
    }
    data.push(node)

    
})

useEffect(()=>{


  const fetchDataP = async () => {
    console.log("updated P")

   //const contractList=["0x4a713ee4deb88a8c2abd77afed415201edb6f1fa", "0x3e0b5807515756635c6347cdeebf95946e604bcf", "0xe6ce27025f13f5213bbc560dc275e292965a392f", "0x59a82e36c401f4f6f29fe83833d778af38a398a1", "0x98bc4773bd1e9a53631fd6028e06cd6cd17b7401", "0x6208d1631ef52b247502850e8352118c32f1747b", "0x86440bcfc74d851b406604d5439592615ccaeb97", "0x937abf4b5e99ac606c4802087cdf6a183983fa64", "0xa9baa624ec00ee09fa39f1fd2afdb26077aff76f", "0x0055448eeefd5c4bac80d260fa63ff0d8402685f"]
   const arrayOfRequests=[]

   let adr="https://api.pancakeswap.info/api/v2/tokens/"

   contractList.forEach(element => {
  
   arrayOfRequests.push(adr+element)
   
 });

  
  let responceDataP=[];
  let transformedDataP=[]
 const respPanc= axios.all(arrayOfRequests.map((endpoint) => axios.get(endpoint))).then(
   
   
   data=>
{ 
 

 responceDataP=data.map((coin)=>{
     responceDataP.push(coin.data.data)
    
     return coin.data.data})
     
     responceDataP.map(el=>{

      let number=rawArrayP.filter((el2) => {
                                      return el2.id===el.name
                                       }).map(el=>el.total)
      let quantity=number[0]
      const nCoin={...el,quantity}
       transformedDataP.push(nCoin)
    return nCoin
    
    })
       setPCoins(transformedDataP)
   }
 );
 
  }
const fetchData = async () => {
      
      console.log("updated")
     const response = await coinGecko.get("/coins/markets/", {
        params: {
          vs_currency: "usd",
          ids: watchList.join(","),
        },
      });
    
      const transformed=response.data.map(el=>{

        let number=data.filter((el2) => {
                                        return el2.id===el.id
                                         }).map(el=>el.quantity)
        let quantity=number[0]

const nCoin={...el,quantity}

return nCoin

      })
      console.log(transformed)  
      setCoins(transformed);
    
    };
   
setInterval(
 () => {
   fetchData()
   fetchDataP()
   
 },
  60000
);
fetchData()
fetchDataP()
  
  
},[watchListP,watchList])


  const renderCoins = () => {
  
   let sum=0;
   let sum2=0;
   let numOfCoins1=0;
   let numOfCoins2=0;
coins.forEach(el=>{
  let q=Number.parseFloat(el.quantity)
  let p=Number.parseFloat(el.current_price)
  sum=sum+q*p
  numOfCoins1++
})
coinsP.forEach(el=>{
  let q=Number.parseFloat(el.quantity)
  let p=Number.parseFloat(el.price)
  sum2=sum2+q*p
  numOfCoins2++
})

const handleChange = e => {
    setSearch(e.target.value);
  };
const filteredCoins = coins.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h).filter(coin =>
  coin.name.toLowerCase().includes(search.toLowerCase())
);
const filteredCoinsP = coinsP.filter(coin =>
  coin.name.toLowerCase().includes(search.toLowerCase())
);



    return (
     <div>
        <div>
       
        <form>
          <input
           
            type='text'
            onChange={handleChange}
            placeholder='Поиск'
          />
        </form>
      </div>


 <ul>
 <div className="bg-white mt-3 p-2 rounded border row">
 <div className="d-flex flex-column">
              
              <span className="text-muted coin-data-category">
               <p style={{fontSize:20}}>Монет: 
 {
              numOfCoins1+numOfCoins2

}

                 </p> 
              
              </span>
            
            </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              
              <span className="text-muted coin-data-category">
               <p style={{fontSize:20}}>USD: 
 {
              (sum+sum2).toFixed(0)

}

                 </p> 
              
              </span>
            
            </div>
           
          </div>
          <div className="col-sm">
            <div className="d-flex flex-column">
 

              <span className="text-muted coin-data-category">
                <p style={{fontSize:20}}>NIS: 
                     {
              (sum*3.11).toFixed(0)

}
                </p>
               
              </span>
            
            </div>
           
          </div>
        </div>
         
  </ul>
 
     <ul className="coinlist list-group mt-2">
{filteredCoins.map(coin => {
        return (
          <Coin key={coin.id} coin={coin}></Coin>
        );
      })}
     </ul>

     <ul className="coinlist list-group mt-2">
     {filteredCoinsP.map(coin=>{
       return <CoinP key={coin.name} coin={coin} />;
     })
    }
       
     </ul>


        
     
     

     </div>
     
      
    );
  };

  return <div>{renderCoins()}</div>;
};

export default CoinList;
