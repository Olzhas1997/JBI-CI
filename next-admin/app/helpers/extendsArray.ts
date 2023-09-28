export const extendArray = (arr: any[], k:number, m: number) => {
  const newArr = [...arr];

  if (k === m) {
    return newArr;
  }

  if (k < m) {
    // eslint-disable-next-line no-plusplus
    for (let i = k; i < m; i++) {
      newArr[i] = arr[i + 1];
    }
    newArr[m] = arr[k];
  } else {
    // eslint-disable-next-line no-plusplus
    for (let i = k; i > m; i--) {
      newArr[i] = arr[i - 1];
    }
    newArr[m] = arr[k];
  }

  return newArr;
};
