import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Coin } from "../../types/coinType";
import { State } from "../../types/ReducerTypes";
import TableCoin from "./tableCoin";
import { AppDispatch } from "../../redux/store/store";
import style from "./rows.module.css";
import Paginacion from "../Paginacion/Paginacion";
import { useGetCoins } from "../../hooks/useGetCoins";
import { useEffect, useState } from "react";

function RowsCoin(num: number) {
  const { coins, isLoading, getCoins } = useGetCoins();

  const navigate = useNavigate();

  const handleClick = (id: any) => {
    navigate(`/coins/${id}`);
  };

  const [pagina, setPagina] = useState(1);
  const [coinsPerPage, setCoinsPerPage] = useState(15);

  const handlePageChange = (page: number) => {
    setPagina(page);
  };

  useEffect(() => {
    getCoins(pagina);
  }, [pagina]);

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
      <Paginacion />
    </div>
  );
}

export default RowsCoin;
