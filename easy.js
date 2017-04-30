/* COUNT AND SAY
1, 11, 21, 1211, 111221, ...

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth sequence.

Note: The sequence of integers will be represented as a string.
*/

var countAndSay = function(n) {
  let sayNum = [];

  var arr = n.toString().split('');

  for (var i=0; i< arr.length; i++){
    if(arr[i] == 1 && arr[i+1] == 1) {
      sayNum.push(2);
      sayNum.push(1);
    } else if(arr[i] == 1 && arr[i+1] != 1){
      sayNum.push(1);
      sayNum.push(1);
    } else if(arr[i] == 2 && arr[i+1] == 2){
      sayNum.push(2);
      sayNum.push(2);
    } else if(arr[i] == 2 && arr[i+1] != 2){
      sayNum.push(1);
      sayNum.push(2);
    }
  }
  sayNum = sayNum.join('')
  return sayNum
}


/*
Determine whether an integer is a palindrome. Do this without extra space.
*/

function isPalindrome(x) {
  let reversed, original
  let arr = x.toString().split('').map(function(y){
    return parseInt(y)
  })

  original = parseInt(arr.join(''))
  reversed = parseInt(arr.reverse().join(''));

  if (reversed === original) {
    return true
  } else { return false };
}

/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

var twoSum = function(nums, target) {

    for(let i=0; i<nums.length; i++) {
      for(let k=i+1; k<nums.length; k++) {

        if ((nums[i] + nums[k]) === target) {
             return[i, k];
          }
    }
  }
  return "No matches";
};

//Sam as above but it can have multiple correct answers
function twoSum(nums, target) {

    let temp = [];

    for(let i=0; i<nums.length; i++) {

        if ((nums[i] + nums[i+1]) === target) {
            temp.push([i, i+1]);
        }
        else {
          for (let k=0; k < nums.length; k++) {
            if(nums[i] + nums[k] === 0) {
              temp.push([i, k]);
            }
          }
        }
    }

    return temp;
}

//linked list
class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.length = 1
    }
}

class LinkedList {
    constructor(node) {
        this.head = node
        this.tail = node
        this.length = 1
    }

    insert(node) {
        this.tail.next = node
        this.tail = node
        this.length++
    }

    insertInPlace(node, i) {

        if(i > this.length) {
            return
        }

        let current = this.head
        for(let index = 1; index < i; index++) {
            current = current.next
        }

        node.next = current.next
        current.next = node
    }
}

//create a new linked list called 'food'
const food = new LinkedList(new Node('burrito'))

//instert foods into food linked list
food.insert(new Node('taco'))
food.insert(new Node('cheese'))
food.insert(new Node('bagel'))
food.insertInPlace(new Node('fruit'), 4)

console.log(JSON.stringify(food))

/*
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321
*/
function reverse(x) {
  let symb;
  let arr = x.toString().split('');

  if(arr[0] === '-' || arr[0] === '+') {
    symb = arr[0];
    arr.shift();
    arr = parseInt(symb + arr.reverse().join(''));
  } else {
      arr = parseInt(arr.reverse().join(''));
    }
  let length = ((arr >> 0).toString(2).length);

  console.log((arr >> 0).toString(2))

  if(length >= 32) {
    return 0;
  } else {
    return arr;
    }
}

//How many of each letter is there in a string
var letterCount = {
  'a': 0,
  'b': 0,
  'c': 0,
  'd': 0,
  'e': 0,
  'f': 0,
  'g': 0,
  'h': 0,
  'i': 0,
  'j': 0,
  'k': 0,
  'l': 0,
  'm': 0,
  'n': 0,
  'o': 0,
  'p': 0,
  'q': 0,
  'r': 0,
  's': 0,
  't': 0,
  'u': 0,
  'v': 0,
  'w': 0,
  'x': 0,
  'y': 0,
  'z': 0
}

function parseString(string) {
  string.toLowerCase()
  string = string.split('');

  for (var i = 0; i < string.length; i++){
    for (var key in letterCount) {
      if (string[i] === key) {
        letterCount[key] +=1;
      }
    }
  }
  console.log(letterCount)
}

var string = "My name is catie, what is your Name?"


//Binary Search Tree
//binary search tree

//node in tree
function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null
}

//constructor for tree
function BinarySearchTree() {
  this.root = null;
}

//the left values are small than the right values, and smaller than its parent node. There can only be two children per Node.

//here is how to find the right position for
BinarySearchTree.prototype.push = function(val) {
  var root = this.root;

  //if there is no root value, set the val to the new root and exit
  if(!root) {
    this.root = new Node(val);
    return;
  }

  var currentNode = root;
  var newNode = new Node(val);

  while(currentNode) {
    if(val < currentNode.value) {
      if(!currentNode.left) {
        currentNode.left = newNode;
        break;
      }
      else {
        currentNode = currentNode.left;
      }
    }
    else {
      if(!currentNode.right) {
        currentNode.right = newNode;
        break;
      }
      else {
        currentNode = currentNode.right;
      }
    }
  }
}

var bst = new BinarySearchTree();
bst.push(3);
bst.push(2);
bst.push(4);
bst.push(7);
bst.push(4);
bst.push(9);
bst.push(11);
bst.push(1);
bst.push(6);

console.log(bst);


//Highest sum from array of credit cards
var cardNumbers = ['1283-7384-2845-8274', '7821-8372-8364-8573', '2536-7384-7833-2783', '7394-8374-7394-1281'];

var findLargest = function(cardArray) {
  var revisedNumbers = [];
  var ccSums = [];

  var indexCounter = 0;
  var highNum = 0;

  cardNumbers.forEach(function(card) {
    var noDash = card.replace(/-/g, "");
    revisedNumbers.push(noDash);
  });

  revisedNumbers.forEach(function(base) {
    var integerArray = base.split('').map(Number);
    var eachSum = integerArray.reduce(function(a,b) {
      return a + b;
    }, 0);

    ccSums.push(eachSum);
  });

  //loop through the sums array
  //use highNum as a constant to check for greater value
  //if greater value, reset the highNum t equal that value
  //and set indexCounter to equal that index number (for tracking)
  for (var i=0; i<ccSums.length; i++){
    if(ccSums[i] > highNum){
      highNum = ccSums[i];
      indexCounter = i;
    }
  }

//now check for the last index of that highest number
  var last = ccSums.lastIndexOf(highNum);
  return cardArray[last];
}

console.log(findLargest(cardNumbers));
