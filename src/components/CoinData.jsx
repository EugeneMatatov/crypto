import React from "react";

const CoinData = ({ data }) => {
  const renderData = () => {
    let quantity=0;
    if (data) {
      return (
        <div className="bg-white mt-3 p-2 rounded border row">
         
          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Капитализация</span>
              <span>{data.market_cap}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
              Циркулирующее предложение
              </span>
              <span>{data.total_supply}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Объем(24Ч)</span>
              <span>{data.total_volume}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">максимум за 24ч</span>
              <span>{data.high_24h}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                В циркуляции
              </span>
              <span>{data.circulating_supply}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">минимум 24ч</span>
              <span>{data.low_24h}</span>
            </div>
          </div>
        </div>
        
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;
