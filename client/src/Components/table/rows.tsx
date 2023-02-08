import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCoins } from "../../hooks/useGetCoins";
import { Coin } from "../../types/coinType";
import Pagination from '../Paginacion/Paginacion';
import TableCoin from "./tableCoin";
//@ts-ignore
import style from "./rows.module.css";

function RowsCoin() {
  const { coins, isLoading, getCoins } = useGetCoins();

  const navigate = useNavigate();

  const handleClick = (id: any) => {
    navigate(`/coins/${id}`);
  };

  useEffect(() => {
    getCoins(1);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={style.loader}></div>
      ) : (
        <div>
          <table className={style.contentTable}>
            <thead>
              <tr>
                <th>#</th>
                <th>Coin</th>
                <th>Price</th>
                <th className={style.hidden}>Mkt Cap</th>
                <th className={style.hidden}>24h Volume</th>
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
          <Pagination />
        </div>
      )}
    </>
  );
}

export default RowsCoin;
