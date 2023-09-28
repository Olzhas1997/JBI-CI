const priceFormatter = (v: any) => {
  let x;
  x = Math.round(v).toString();
  x += '';
  x = x
    .split('')
    .reverse()
    .map((item: any, i: number) => (i % 3 === 0 ? `${item} ` : item));
  x = x.reverse().join('');
  return x;
};

export default priceFormatter;
