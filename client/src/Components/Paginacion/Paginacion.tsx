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
      <button className={style.buttonPag} onClick={onPrev}>
        {"<"}
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
      <button className={style.buttonPag} onClick={onNext}>
        {">"}
      </button>
    </div>
  );
}

export default Pagination;
