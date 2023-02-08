import { useState, useEffect } from 'react';
import { useGetCoins } from "../../hooks/useGetCoins";
//@ts-ignore
import style from "./paginacion.module.css";

function Pagination() {
    
  const { getCoins } = useGetCoins();
 
  const [page, setPage] = useState(1);
  console.log(page)

  const [input, setInput] = useState("");
  
  useEffect(() => {
    const pageStorage = JSON.parse(window.localStorage.getItem("page") || "1");
    console.log(pageStorage)
    setPage(pageStorage);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("page", JSON.stringify(page));
  }, [page]);

  const handleClickUp = () => {
    setPage(page + 1);
    /* getCoins(page + 1); */
  };
  const handleClickDown = () => {
    if (page > 1) {
      /* getCoins(page - 1); */
      setPage(page - 1);
    }
  };
  const handleInputChange = () => {
    getCoins(page);
  };

  return (
    <div className={style.containerPag}>
      <button className={style.buttonPag} onClick={handleClickDown}>
        {"<"} Prev
      </button>
      <input
        type="number"
        className={style.inputPag}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className={style.buttonPagGo} onClick={handleInputChange}>
        GO
      </button>
      <button className={style.buttonPag} onClick={handleClickUp}>
        Next {">"}
      </button>
    </div>
  );
}

export default Pagination;
