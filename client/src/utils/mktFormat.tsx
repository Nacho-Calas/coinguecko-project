// create a function to format a price using a regex for market cap volume 
// example input 443326319353
// example output 443,326,319,353

export function currencyFormat(num:number) {
  return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}


