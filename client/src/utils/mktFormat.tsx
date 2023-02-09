export function currencyFormat(num:number) {
  return '$' + num?.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export function percentageFormat(num:number) {
  return num?.toFixed(2) + '%'
}

export function priceFormat(num:number) {
  if(num > 10) {
    
    return '$' + num?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  } else {
    //example return $0.397387
    return '$' + num?.toFixed(6)
  } 
}