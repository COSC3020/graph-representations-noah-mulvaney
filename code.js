// COSC3020 Graph Representations Exercise
// Noah Mulvaney, nmulvane@uwyo.edu
// 1 Mar 2024

// matrix to list
function convertToAdjList(adj_matrix) {
    let adj_list = [];
    
    for (let i = 0; i < adj_matrix.length; i++) {
        let row_list = [];
        
        for (let j = 0; j < adj_matrix[i].length; j++)
            if (adj_matrix[i][j] != 0) row_list.push(j);
        
        adj_list.push(row_list);
    }
    
    return adj_list;
}

// list to matrix
function convert_to_matrix(adj_list) {
    let matrix = [];
    let v = adj_list.length;
    
    // create matrix of correct size and all zeros
    for (let i = 0; i < v; i++) {
        let row = [];
        for (let j = 0; j < v; j++) {
            row[j] = 0;
        }
        matrix.push(row);
    }

    // set appropriate entries to one
    for (let i = 0; i < adj_list.length; i++) 
        for (let j = 0; j < adj_list[i].length; j++)
            matrix[i][adj_list[i][j]] = 1;
            
    return matrix;
}

module.exports = {convertToAdjList, convert_to_matrix};
