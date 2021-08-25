export const toFirstCharUpperCase = (name) =>
  name.charAt(0).toUpperCase() + name.slice(1);

export const pad = (number, length) => {
  let str = "" + number;
  while (str.length < length) {
    str = "0" + str;
  }
  return str;
};
