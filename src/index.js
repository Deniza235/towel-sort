
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let newArr = [];
    if (!Array.isArray(matrix)|| matrix.length === 0 ) {
        return [];
    } else {
        for(let i = 0; i < matrix.length; i++) {
            for(let j = 0; j < matrix[i].length; j++) {
                let colIndex = i % 2 === 0 ? j : (matrix[i].length - j -1);
                newArr.push(matrix[i][colIndex]);
            }
        }
    return newArr;
    }
}
