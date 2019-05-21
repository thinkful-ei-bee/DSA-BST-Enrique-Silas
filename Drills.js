const BinarySearchTree = require('./BST');

// 1.
/*

            3
        1       4
          2         6
                   5    9
                       7
 

            E
          A   S
             I   Y
              O Q
             N   U
                T  
 
 */

// 2.
function easyQuestion() {
  const BST = new BinarySearchTree;

  BST.insert(3, 3);
  BST.insert(1, 1);
  BST.insert(4, 4);
  BST.insert(6, 6);
  BST.insert(9, 9);
  BST.insert(2, 2);
  BST.insert(5, 5);
  BST.insert(7, 7);

//   BST.insert('E');
//   BST.insert('A');
//   BST.insert('S');
//   BST.insert('Y');
//   BST.insert('Q');
//   BST.insert('U');
//   BST.insert('E');
//   BST.insert('S');
//   BST.insert('T');
//   BST.insert('I');
//   BST.insert('O');
//   BST.insert('N');

  //console.log(BST);
  console.log(tree(BST));
}

const globalTree = new BinarySearchTree;
globalTree.insert(5, 5);
globalTree.insert(4, 5);

function tree(t) {
  //console.log(t);
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}

easyQuestion();
//console.log(tree(globalTree));