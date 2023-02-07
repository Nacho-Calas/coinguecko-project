import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetDetail } from "../../hooks/useGetCoins";
import { State } from "../../types/ReducerTypes";
import style from "./index.module.css";

//create a page for each coin that will show the details of the coin

function CoinDetails() {
  const id = window.location.pathname.split("/")[2];
  console.log(id)
  /* useGetDetail(id); */

  // const navigate = useNavigate()
  // const coins = useSelector((state: State) => state.coins)

  return <div className={style.container}>Estas en Detail</div>;
}

export default CoinDetails;
