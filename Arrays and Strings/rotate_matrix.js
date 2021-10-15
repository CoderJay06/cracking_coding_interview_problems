/*
    Problem: Given an image represented by an N x N matrix, where each
    pixel in the image is represeneted by an integer, write a method to
    rotate the image by 90 degrees. Can you do this in place?

    steps: 
        separate matrix into layers,
        perform swap on each layer starting from outermost
        and working inwards
        
*/
// O(n^2)
function rotate(matrix) {
    if (matrix.length === 0 || matrix.length !== matrix[0].length) return false;
    let n = matrix.length;
    for (let layer = 0; layer < n / 2; layer++) {
        let first = layer;
        let last = n - 1 - layer;
        for (let i = first; i < last; i++) {
            let offset = i - first;
            let top = matrix[first][i]; // save top

            // left -> top
            matrix[first][i] = matrix[last - offset][first];

            // bottom -> left
            matrix[last - offset][first] = matrix[last][last - offset];

            // right -> bottom
            matrix[last][last - offset] = matrix[i][last];

            // top -> right
            matrix[i][last] = top; // right <- saved top
        }
    }
    return true;
}

const matrix = [
    [1, 2, 3, 4],
    [6, 7, 8, 9],
    [11, 12, 13, 14],
    [15, 16, 17, 18]
]
console.log('before ', matrix);
rotate(matrix);
console.log('after ', matrix);