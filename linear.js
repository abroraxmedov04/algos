const linearSearch = (arr, target) => {
  for (let [i, value] of Object.entries(arr)) {
    if (value === target) {
      return i;
    }
  }

  return -1;
};
