
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let resultArr = [];
  if (matrix !== undefined) {
    for (let i = 0; i < matrix.length; i++) {
      i%2 ? resultArr.push(matrix[i].reverse()) : resultArr.push(matrix[i]);
    }
  }
  return resultArr.flat(Infinity);
}