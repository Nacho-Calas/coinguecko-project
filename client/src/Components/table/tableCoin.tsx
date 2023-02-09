import { currencyFormat, percentageFormat, priceFormat } from "../../utils/mktFormat";
import { Coin } from "../../types/coinType";
//@ts-ignore
import style from "./table.module.css";

function TableCoin({ coin }: { coin: Coin }) {
  return (
    <>
      <td>{coin.market_cap_rank}</td>
      <td className={style.coinname}>
        <img src={coin.image} alt={coin.name} />
        <span>{coin.name}</span>
        <span className={style.symbol}>{coin.symbol}</span>
      </td>
      <td>{priceFormat(coin.current_price)}</td>
      <td className={style.hidden}>{currencyFormat(coin.market_cap)}</td>
      <td className={style.hidden}>{currencyFormat(coin.total_volume)}</td>
      <td
        className={
          coin.price_change_percentage_24h > 0 ? style.green : style.red
        }
      >
        {percentageFormat(coin.price_change_percentage_24h)}
      </td>
    </>
  );
}

export default TableCoin;
