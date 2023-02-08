import { useState } from "react";
import { useGetCoins } from "../../hooks/useGetCoins";

//ignore next line
//@ts-ignore
import style from "./paginacion.module.css";

function Pagination() {
  const { coins, isLoading, getCoins } = useGetCoins();

  const [page, setpage] = useState(1);

  const handleClickUp = () => {
    getCoins(page + 1);
    console.log(page);
  };
  const handleClickDown = () => {
    if (page > 1) {
      getCoins(page - 1);
    }
    console.log(page);
  };
  const handleInputChange = (e: any) => {
    getCoins(e.target.value);
  };

  return (
    <div className={style.containerPag}>
      <button className={style.buttonPag} onClick={handleClickDown}>
        Prev
      </button>
      <input
        type="number"
        className={style.inputPag}
        onChange={handleInputChange}
      />
      <button className={style.buttonPag} onClick={handleClickUp}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
