const BinarySearchTree = require('./BST');

// 1.
/*

            3
        1       4
          2         6
                   5    9
                       7
                        8

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
globalTree.insert(3, 3);
globalTree.insert(1, 1);
globalTree.insert(4, 4);
globalTree.insert(6, 6);
globalTree.insert(9, 9);
globalTree.insert(2, 2);
globalTree.insert(5, 5);
globalTree.insert(7, 7);
globalTree.insert(8,8);



function tree(t) {
  //console.log(t);
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}

// easyQuestion();
//console.log(tree(globalTree));



//time complexity is O(n) because it grows proportionally to the size of the tree being passed in
function heightFinder(tree, count=1){

  if(tree === null){
    return count;
  }
  if(tree !==  null){
    return Math.max(heightFinder(tree.left, count++), heightFinder(tree.right, count++))
  }
}

// console.log(heightFinder(globalTree))

function treeIsBST(tree){
 
    if (tree.right === null && tree.left === null){
     
      return true;
    }
    if (tree !== null){
      if(tree.right !== null && tree.right.key > tree.key){
        return treeIsBST(tree.right)
      }
      if(tree.left !== null && tree.left.key < tree.key){
        return treeIsBST(tree.left)
      }
    }
      return false;
    
}

// console.log(treeIsBST(globalTree))

  //     3
  //  1       4
  // 2           6
  //          5      9
  //               7
  //                 8


  function findThirdLargest(tree){
   let biggestItem = tree._findMax()
   tree.remove(biggestItem.key)
   let secondBiggest= tree._findMax()
   tree.remove(secondBiggest.key)
   let thirdBiggest = tree._findMax()
   return thirdBiggest.key
  }
  console.log(findThirdLargest(globalTree))