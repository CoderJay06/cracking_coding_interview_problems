/*
    Problem: Write an algorithm such that  if an element in an MxN ,atrix is 0,
    its entire row and column are set to 0
*/

function setZeros(matrix) {
    const row = new Boolean(matrix.length);
    const column = new Boolean(matrix[0].length);

    // Store the row and column index with value 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                row[i] = true;
                column[j] = true;
            }
        }
    }

    // Nullify rows
    for (let i = 0; i < row.length; i++) {
        if (row[i]) nullifyRow(matrix, i);
    }

    // Nullify columns
    for (let j = 0; j < matrix[0].length; j++) {
        if (column[j]) nullifyColumn(matrix, j);
    }
}

function nullifyRow(matrix, row) {
    for (let j = 0; j < matrix[0].length; j++) {
        matrix[row][j] = 0;
    }
}

function nullifyColumn(matrix, col) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i][col] = 0;
    }
}

const mat = [
    [1, 2, 3, 4],
    [0, 0, 5, 6],
    [1, 2, 0, 3],
    [9, 0, 2, 2]
]
console.log('before ', mat)
setZeros(mat);
console.log('after ', mat)







