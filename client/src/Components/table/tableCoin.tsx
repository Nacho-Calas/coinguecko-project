import { useSelector } from "react-redux";
import { Coin } from "../../types/coinType";
import { State } from "../../types/ReducerTypes";
import { currencyFormat } from "../../utils/mktFormat";
import style from "./table.module.css";

function TableCoin() {
  const coins = useSelector((state: State) => state.coins);
  console.log(coins);
  return (
    <div>
      <table className={style.contentTable}>
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Price</th>
            <th>Mkt Cap</th>
            <th>24h Volume</th>
            <th>24h</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin: Coin) => (
            <tr key={coin.id}>
              <td>{coin.market_cap_rank}</td>
              <td className={style.coinname}>
                <img src={coin.image} alt={coin.name} />
                <span>{coin.name}</span>
                <span className={style.symbol}>{coin.symbol}</span>
              </td>
              <td>${coin.current_price}</td>
              <td>{currencyFormat(coin.market_cap)}</td>
              <td>{currencyFormat(coin.total_volume)}</td>
              <td className={coin.price_change_percentage_24h > 0 ? style.green : style.red}>
                {coin.price_change_percentage_24h}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableCoin;
