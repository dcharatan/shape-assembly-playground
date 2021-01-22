export const isNumber = (str) => !Number.isNaN(str) && !Number.isNaN(parseFloat(str));

export const mapToObject = (map) => {
  const obj = {};
  map.forEach((value, key) => {
    obj[key] = value;
  });
  return obj;
};
