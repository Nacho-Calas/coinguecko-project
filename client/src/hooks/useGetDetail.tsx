import { useEffect } from "react";
import { getCoinDetail } from "../redux/actions/actions";	
import { AppDispatch } from "../redux/store/store";
import { useDispatch } from "react-redux";

export const useGetDetail = (id: string) => {
    const dispatch: AppDispatch = useDispatch();
    useEffect(() => {
      dispatch(getCoinDetail(id));
    }, [dispatch, id]);
  }