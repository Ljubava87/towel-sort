module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) {
      return [];
  }

  return matrix.reduce((acc, curr, index) => {
      if (index % 2 !== 0) {
          curr.reverse();
      }
      return acc.concat(curr);
  }, []);
}
