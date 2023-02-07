import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


function tableCoin() {

  const dispatch = useDispatch()
  const getCoins = useSelector((state: any) => state.coin)


  return (
    <div>tableCoin</div>
  )
}

export default tableCoin