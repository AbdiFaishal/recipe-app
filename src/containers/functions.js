export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const bgChange = () => {
  const randomColor =
    "rgb(" + random(0, 255) + "," + random(0, 255) + "," + random(0, 255) + ")";
  return randomColor;
};
