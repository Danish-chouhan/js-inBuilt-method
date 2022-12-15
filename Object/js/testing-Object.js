// var a = {
//     PI : function(){
//         document.write(`hlw i m ${this.name}. and i m a ${this.isHuman}`)
//     }
// }
// var b = Object.create(a);
// b.name ="Danish-chouhan";
// b.isHuman = true;
// b.PI()

// var a = {
//     age : 17,
//     class : "11th"
// };
// document.write(Object.values(a))

// function fn(n){
//     this.num = n
// };
// fn.prototype.valueOf = function(){
//     return this.num
// };
// var a = new fn(10);
// document.write(a + 19)

// function Name(n){
//     this.Name = n
// }
// var a = new Name("Danish-chouhan");
// Name.prototype.toString = function(){
//     return `${this.Name}`
// };
// document.write(a.toString());

// var a = {
//     aa : 18
// };
// Object.seal(a)
// a.aa = 17;
// document.write(a.aa)

// var a ={
//     aa : 17,
//     bb : 18,
//     cc : 19
// };
// document.write(Object.keys(a))

// var a = {
//     aa : 17
// };

// Object.seal(a)
// document.write(Object.isSealed(a))

// var a = {
//     aa : 17,
//     bb : 18,
//     cc :19
// };
// for(var [key,value] of Object.entries(a)){
//  document.write(`${key} ${value}`)
// }

// var a ={
//     aa : 17
// };
// Object.freeze(a)
// a.aa = 19
// document.write(a.aa)

// var a ={};
// Object.defineProperties(a ,{
//     p1 :{
//     value: 17,
//     writable : true
//     },
//     p2 :{}
// })
// document.write(a.p1)

// var a ={};
// Object.defineProperty(a , 'p1' ,{
//  value : 17,
//  Name : "Danish-chouhan",
//  writable:false 
// })
// document.write(a.p1)

// var a = new Map([
//     ["Name" , "Danish-chouhan"],
//     ["Age" , 17]
// ]);
// var b = Object.fromEntries(a) 
// console.log(b)

// var a = {
//     name : 'Danish-chouhan'
// };
// var b = Object.getOwnPropertyDescriptor(a , 'name')
// document.write(b.configurable)
// document.write(b.value)

// var a = {
//     name : "Danish-chouhan"
// };
// var b = Object.getOwnPropertyDescriptors(a)
// document.write(b.name.configurable)
// document.write(b.name.value)

// var a  = {
//     a : 12,
//     b : 11,
//     c : 10,
//     d : 9,
//     e : 8
// };
// document.write(Object.getOwnPropertyNames(a))

// var a = {};
// var b = Object.create(a)
// document.write(Object.getPrototypeOf(b)=== a)

// var a ={
//     name : "Danish-chouhan"
// };
// document.write(Object.hasOwn(a ,"name"))


// var a ={
//     name : "Danish-chouhan"
// };
// document.write(Object.hasOwnProperty("name"))

