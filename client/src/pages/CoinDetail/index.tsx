import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { currencyFormat } from "../../utils/mktFormat";

import { useGetDetail } from "../../hooks/useGetDetail";
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
            <div className={style.title}>
              <h1>{`#${coin?.market_cap_rank}`}</h1>
              <img src={coin?.image.small} alt={coin?.name} />
              <h1>{coin?.name}</h1>
              <h2>{coin?.symbol}</h2>
            </div>
            <div className={style.price}>
              <h1>{`${coin?.market_data.current_price.usd} USD`}</h1>
            </div>

            <div className={style.market}>
              <h3 className={style.high}>
                {" "}
                {`High 24h: ${coin?.market_data.high_24h?.usd} USD`}
              </h3>
              <h3 className={style.low}>
                {" "}
                {`Low 24h: ${coin?.market_data.low_24h?.usd} USD`}
              </h3>
            </div>

            <div className={style.market}>
              <h3>{`Market Cap: ${currencyFormat(
                coin?.market_data.market_cap?.usd || 0
              )} USD`}</h3>
              <h3>{`Total Volume: ${currencyFormat(
                coin?.market_data.total_volume?.usd || 0
              )} USD`}</h3>
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
