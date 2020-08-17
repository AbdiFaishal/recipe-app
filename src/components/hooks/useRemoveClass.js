const useRemoveClass = () => {
  const removeClass = () => {
    document
      .querySelectorAll(".results__link")
      .forEach((el) => el.classList.remove("result__link--active"));
    document
      .querySelectorAll(".likes__link")
      .forEach((el) => el.classList.remove("result__link--active"));
  };

  return removeClass;
};

export default useRemoveClass;
