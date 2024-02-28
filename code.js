// COSC3020 Graph Representations Exercise
// Noah Mulvaney, nmulvane@uwyo.edu
// 28 Feb 2024

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

// test matrix to list
function test_to_list(am) {
    console.log("Matrix");
    for (let i = 0; i < am.length; i++) {
        console.log(am[i]);
    }
    
    al = convertToAdjList(am);
    console.log("List:");
    for (let i = 0; i < al.length; i++) {
        console.log(al[i]);
    }
}

test_to_list([[0, 1], [1, 1]]);
test_to_list([[0, 1, 0], [0, 0, 0], [1, 1, 0]]);
test_to_list([[0, 1, 0, 1], [0, 0, 0, 1], [1, 1, 0, 1], [0, 1, 1, 1]]);

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

// test list to matrix
function test_to_matrix(al) {
    console.log("List");
    for (let i = 0; i < al.length; i++) {
        console.log(al[i]);
    }
    
    am = convert_to_matrix(al);
    console.log("Matrix:");
    for (let i = 0; i < al.length; i++) {
        console.log(am[i]);
    }
}

test_to_matrix([[1], [0, 1]]);
test_to_matrix([[1], [0, 1], [0, 1, 2]]);
test_to_matrix([[1, 3], [0, 1], [1, 2], []]);
