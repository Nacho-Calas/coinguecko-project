import { useState, MouseEventHandler } from "react";
//@ts-ignore
import style from "./paginacion.module.css";

type PaginationProps = {
  onPrev: MouseEventHandler;
  onNext: MouseEventHandler;
  onSubmit: Function;
  currentPage: string;
};

function Pagination({
  onPrev,
  onNext,
  onSubmit,
  currentPage,
}: PaginationProps) {
  const [input, setInput] = useState("");

  return (
    <div className={style.containerPag}>
      <button className={style.buttonLPag} onClick={onPrev}>
        <div className={style.arrow}>
          <span></span>
          <span></span>
        </div>
      </button>
      <input
        type="number"
        className={style.inputPag}
        onChange={(e) => setInput(e.target.value)}
        defaultValue={currentPage}
      />
      <button className={style.buttonPagGo} onClick={() => onSubmit(input)}>
        GO
      </button>
      <button className={style.buttonRPag} onClick={onNext} >
        <div className={style.arrow} >
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
  );
}

export default Pagination;
