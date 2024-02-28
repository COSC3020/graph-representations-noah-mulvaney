// COSC3020 Graph Representations Exercise
// Noah Mulvaney, nmulvane@uwyo.edu
// 28 Feb 2024

function convertToAdjList(adj_matrix) {
    let adj_list = [];
    
    for (let i = 0; i < adj_matrix.length; i++) {
        let row_list = [];
        
        for (let j = 0; j < adj_matrix[i].length; j++)
            if (adj_matrix[i][j] != 0) row_list.push(j + 1);
        
        adj_list.push(row_list);
    }
    
    return adj_list;
}

function my_test(am) {
    console.log("Input: ");
    for (let i = 0; i < am.length; i++) {
        console.log(am[i]);
    }
    
    al = convertToAdjList(am);
    console.log("Output:");
    for (let i = 0; i < al.length; i++) {
        console.log(al[i]);
    }
}

my_test([[0, 1], [1, 1]]);
my_test([[0, 1, 0], [0, 0, 0], [1, 1, 0]]);
my_test([[0, 1, 0, 1], [0, 0, 0, 1], [1, 1, 0, 1], [0, 1, 1, 1]]);
