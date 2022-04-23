export const degToRad = (degree) => {
  return (degree / 180) * Math.PI;
};

export const randomRange = (min, max) => {
  return Math.random() * (max - min) + min;
};
