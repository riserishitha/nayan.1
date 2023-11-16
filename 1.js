// document.getElementById("form").addEventListener("submit",function(e){
//     e.preventDefault();
//     console.log(e);
// })
document.getElementById("images").addEventListener("click",function(e){
    // e.preventDefault();
        console.log("clicked on images");
},true)

document.getElementById("river").addEventListener("click",function(e){
    // e.stopPropagation;
        console.log("clicked on river");
 },true)



console.log(document)

function fnName() {
    this.name="rishi"
}
let object= new fnName()
console.log(object)
// console.log(new fnName)

function cardetails (){
    this.name = "tata"
    this.year = 2023
    this.wheels = 4
}
let car = new cardetails()
console.log(car)

function librarydetails (){
    this.name = "elibrary"
    this.books = 100
    this.years = 5
    this.famousbook = "The frog prince"
    
}
let lib = new librarydetails()
console.log(lib)


function ram(a,b){
    this.sum =a+b;
    // let add = a+b
    // return add;
}
console.log(new ram(3,4))

class library{
    constructor(){
        this.room="excel"
    }
}
console.log(new library)

// a=5
// b=10
function addition (a,b){
    this.sum=a+b;
    this.sub=function(x){
        let sub = this.sum-(x)
        return (sub)
        // let obj = new library(10,20)
        // return obj
}}
console.log(new addition(10,20))

// let obj = new library(10,20)
// obj.sub(30)

function profile(){
    this.name="rishi"
    this.age="17"
    this.checkValid = function(){

        return this.age>=18;
    }
}
var but = new profile()
console.log(but.checkValid())

let x = ["rishi", "ram", "raju"]
console.log(typeof x)
console.log(x)

