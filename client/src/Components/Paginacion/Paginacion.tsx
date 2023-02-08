import { useState } from "react";
import { useGetCoins } from "../../hooks/useGetCoins";
//@ts-ignore
import style from "./paginacion.module.css";

function Pagination() {
  const { getCoins } = useGetCoins();

  const [page] = useState(1);
  const [input, setInput] = useState("");

  const handleClickUp = () => {
    getCoins(page + 1);
  };
  const handleClickDown = () => {
    if (page > 1) {
      getCoins(page - 1);
    }
  };
  const handleInputChange = () => {
    getCoins(parseInt(input));
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
