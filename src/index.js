
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let output = [];
  // делаем проверку на пустой массив
  if (matrix == undefined) {
    return []
  } else {
    for (let i = 0; i < matrix.length; i++) {
      // перебираем массив с массивами
      // если у нас индексы 0,2,4,6...оставляем как есть
      if (i % 2 === 0) {
        // добавляем в общий массив
        output = output.concat(matrix[i])
        // если индексы 1,3,5...
      } else {
        // добавляем в массив, только сделав реверс
        output = output.concat(matrix[i].reverse())
      }
    }
  }
  

  return output
}
