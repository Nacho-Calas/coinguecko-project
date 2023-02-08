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

  const pageStorage = JSON.parse(window.localStorage.getItem("page") || "1");
  const [page, setPage] = useState(pageStorage);

  useEffect(() => {
    setPage(pageStorage);
  }, []);

  useEffect(() => {
    if (page) {
      window.localStorage.setItem("page", JSON.stringify(page));
      getCoins(page)
    }
  }, [page]);

  const handleClickUp = () => {
    setPage(page + 1);
  };

  const handleClickDown = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleSubmit = (input: string) => {
    setPage(parseInt(input))
  };

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
          <Pagination
            onNext={handleClickUp}
            onPrev={handleClickDown}
            onSubmit={handleSubmit}
            currentPage={page}
          />
        </div>
      )}
    </>
  );
}

export default RowsCoin;