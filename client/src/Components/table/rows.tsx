import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Coin } from "../../types/coinType";
import { State } from "../../types/ReducerTypes";
import TableCoin from "./tableCoin";

import { getCoinDetail } from "../../redux/actions/actions";
import { AppDispatch } from "../../redux/store/store";

import style from "./rows.module.css";
import { useState } from "react";
import Paginacion from '../Paginacion/Paginacion';

function RowsCoin() {
  const coins = useSelector((state: State) => state.coins);

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (id: any) => {
    /* dispatch(getCoinDetail(id)); */
    navigate(`/coins/${id}`);
  };


//set a state to paginate the table
const [pagina, setPagina] = useState(1);
const [coinsPerPage, setCoinsPerPage] = useState(15);

const maxPage = Math.ceil(coins.length / coinsPerPage);
console.log(maxPage)








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
            <tr key={coin.id} onClick={() => handleClick(coin.id)}>
              <TableCoin coin={coin} key={coin.id} />
            </tr>
          ))}
        </tbody>
      </table>
      <Paginacion pagina={pagina} setPagina={setPagina} maxPage={maxPage} />
          </div>
  );
}

export default RowsCoin;
