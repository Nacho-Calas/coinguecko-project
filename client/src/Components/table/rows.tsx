import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Coin } from "../../types/coinType";
import { State } from "../../types/ReducerTypes";
import TableCoin from "./tableCoin";

import style from "./rows.module.css";

function RowsCoin() {
  const coins = useSelector((state: State) => state.coins);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
            <tr key={coin.id} onClick={() => navigate(`/coins/${coin.id}`)}>
              <TableCoin coin={coin} key={coin.id} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RowsCoin;
