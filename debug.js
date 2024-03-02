// COSC3020 Graph Representations Exercise
// Noah Mulvaney, nmulvane@uwyo.edu
// 1 Mar 2024

// Debug matrix to/from list conversion function

let code = require("./code.js");

// test matrix to list
function test_to_list(am) {
  console.log("Matrix");
  for (let i = 0; i < am.length; i++) {
      console.log(am[i]);
  }
  
  al = code.convertToAdjList(am);
  console.log("List:");
  for (let i = 0; i < al.length; i++) {
      console.log(al[i]);
  }
}

test_to_list([[0, 1], [1, 1]]);
test_to_list([[0, 1, 0], [0, 0, 0], [1, 1, 0]]);
test_to_list([[0, 1, 0, 1], [0, 0, 0, 1], [1, 1, 0, 1], [0, 1, 1, 1]]);

// test list to matrix
function test_to_matrix(al) {
  console.log("List");
  for (let i = 0; i < al.length; i++) {
      console.log(al[i]);
  }
  
  am = code.convert_to_matrix(al);
  console.log("Matrix:");
  for (let i = 0; i < al.length; i++) {
      console.log(am[i]);
  }
}

test_to_matrix([[1], [0, 1]]);
test_to_matrix([[1], [0, 1], [0, 1, 2]]);
test_to_matrix([[1, 3], [0, 1], [1, 2], []]);
