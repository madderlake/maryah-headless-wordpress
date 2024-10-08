export function strToNum(str: string) {
  return parseInt(str.toString().replace(/,/g, ''));
}

export function addCommas(x: string) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const formatDate = (date: string) => new Date(date).toDateString();
