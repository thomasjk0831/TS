let num: number = 8
let car: string = "Honda"
let isWorking: boolean = true
let y: any = "hello"
num = 9
y = 2

//arrays
let nums: number[] = [1,2,4]
let arr: any[] =[1,true, 'a']

//tuple
// define what can be assigned in array
let person : [number, string, boolean] = [1, 'a', false]

//tuple array
//array of arrays

let people : [number, string][]
people = [
    [1, "John"],
    [2, "Steve"]
]

let random : string | number = 3
random = "hello"
console.log("num", num)

enum Direction1 {
    Up = 1,
    Down = 2
}

//objects
const user : {
    id: Number,
    name: String,
} = {
    id: 1,
    name: "Joe"
}
console.log(Direction1.Up)