export function strToNum(str) {
  return parseInt(str.toString().replace(/,/g, ''));
}

export function addCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
