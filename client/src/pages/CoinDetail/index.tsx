import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { currencyFormat, priceFormat } from "../../utils/mktFormat";
import { useGetDetail } from "../../hooks/useGetDetail";
//@ts-ignore
import style from "./index.module.css";

function CoinDetails() {
  const { id } = useParams();
  const { coin, isLoading, getCoinDetail } = useGetDetail();

  useEffect(() => {
    if (id) {
      getCoinDetail(id);
    }
  }, [id]);

  return (
    <>
      {isLoading ? (
        <div className={style.loader}></div>
      ) : (
        <div className={style.container}>
          <div className={style.header}>
            <h1 className={style.badge}>{`Rank #${coin?.market_cap_rank}`}</h1>
            <div className={style.title}>
              <img src={coin?.image.small} alt={coin?.name} />
              <h1>{coin?.name}</h1>
              <h2>{coin?.symbol}</h2>
            </div>
            <div className={style.price}>
              <h1>{priceFormat(coin?.market_data.current_price.usd)} </h1>

              {coin?.market_data.price_change_percentage_24h > 0 ? (
                <span className={style.high}>
                  {`+${coin?.market_data.price_change_percentage_24h.toFixed(
                    2
                  )}%`}
                </span>
              ) : (
                <span className={style.low}>
                  {`${coin?.market_data.price_change_percentage_24h.toFixed(
                    2
                  )}%`}
                </span>
              )}
            </div>

            <div className={style.market}>
              <span>
                <h3>Market High 24h</h3>
                <h3>{coin?.market_data.high_24h?.usd}</h3>
              </span>
              <span>
                <h3>Market Low 24h</h3>
                <h3>{coin?.market_data.low_24h?.usd}</h3>
              </span>
              <span>
                <h3>Market Cap</h3>
                <h3>
                  {currencyFormat(coin?.market_data.market_cap?.usd || 0)} USD
                </h3>
              </span>
              <span>
                <h3>Market Cap</h3>
                <h3>
                  {currencyFormat(coin?.market_data.total_volume?.usd || 0)}
                </h3>
              </span>
            </div>
          </div>

          <div className={style.description}>
            <h1>Description</h1>
            <p>{coin?.description?.en}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default CoinDetails;
