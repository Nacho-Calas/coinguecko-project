import { useGetDetail } from "../../hooks/useGetDetail";
import style from "./index.module.css";
import { useSelector } from "react-redux";
import { Coin } from '../../types/coinType';

//create a page for each coin that will show the details of the coin

function CoinDetails() {
  const id = window.location.pathname.split("/")[2];
  console.log(id);


  useGetDetail(id);
  const coin = useSelector((state: Coin) => state.coinDetail);

  return (
    <div className={style.container}>
      <div className={style.coin}>
        <img src={coin.image.large} alt={coin.name} />
      </div>
    </div>
  );
}

export default CoinDetails;
