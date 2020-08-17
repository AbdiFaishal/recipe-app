const useLiked = () => {
  const isLiked = (id, target) => {
    return target.findIndex((el) => el.id === id) !== -1;
  };

  const deleteLiked = (id, target) => {
    const index = target.findIndex((el) => el.id === id);
    target.splice(index, 1);
  };

  return [isLiked, deleteLiked];
};

export default useLiked;
