"use strict";
let num = 8;
let car = "Honda";
let isWorking = true;
let y = "hello";
num = 9;
y = 2;
//arrays
let nums = [1, 2, 4];
let arr = [1, true, 'a'];
//tuple
// define what can be assigned in array
let person = [1, 'a', false];
//tuple array
//array of arrays
let people;
people = [
    [1, "John"],
    [2, "Steve"]
];
let random = 3;
random = "hello";
console.log("num", num);
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
})(Direction1 || (Direction1 = {}));
//objects
const user = {
    id: 1,
    name: "Joe"
};
console.log(Direction1.Up);

//just playing around
class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
      // Write your code here.
      array.push(this.name)
      for(const child of this.children){
        child.depthFirstSearch(array)
      }
      return array
    }
  }

  exports.Node = Node;
