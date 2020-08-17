const useLimitTitle = () => {
  // Function for converting string (condition: title max character are 18)
  const titleConvert = (title, limit = 18) => {
    const newTitle = [];
    if (title.length > limit) {
      title.split(" ").reduce((acc, cur) => {
        if (acc + cur.length <= limit) {
          newTitle.push(cur);
        }
        return acc + cur.length;
      }, 0);

      // return the result
      return `${newTitle.join(" ")}...`;
    } else {
      return title;
    }
  };

  return [titleConvert];
};

export default useLimitTitle;
