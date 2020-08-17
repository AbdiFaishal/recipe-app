const useResetActiveClass = () => {
  const removeResultsClass = () => {
    // reset pagination active class
    document
      .querySelectorAll(".results__pages li")
      .forEach((el) => el.classList.remove("active"));
    document
      .querySelectorAll(".results__pages a")
      .forEach((el) => el.classList.remove("active"));

    // reset recipe list active class
    document
      .querySelectorAll(".results__link")
      .forEach((el) => el.classList.remove("result__link--active"));
  };

  return [removeResultsClass];
};

export default useResetActiveClass;
