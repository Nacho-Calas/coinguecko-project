import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Coin } from "../../types/coinType";
import { currencyFormat } from "../../utils/mktFormat";
import { useParams } from "react-router-dom";
import { getCoinDetail } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useGetCoins } from "./hooks/useGetCoins";


import style from "./index.module.css";

import { AppDispatch } from "../../redux/store/store";

function CoinDetails() {
  const { id } = useParams();
  const dispatch: AppDispatch = useDispatch();

  const coin = useSelector((state: Coin) => state.coinDetail);
  console.log(coin);

  useEffect(() => {
    if (id) {
      dispatch(getCoinDetail(id));
    }
  }, [dispatch]);

  if (!coin) return <h1 className={style.loading}>Loading...</h1>;

  return (
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
  );
}

export default CoinDetails;
