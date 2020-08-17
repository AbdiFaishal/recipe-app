const usePageNumber = () => {
  const pageNumber = [];
  const calculatePage = (a, b) => {
    // Total list of pagination in array
    for (let i = 1; i <= Math.ceil(a / b); i++) {
      pageNumber.push(i);
    }
  };

  return [pageNumber, calculatePage];
};

export default usePageNumber;
