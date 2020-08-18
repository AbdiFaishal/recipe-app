const useRandom = () => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return random;
};

export default useRandom;
