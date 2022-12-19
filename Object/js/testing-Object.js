// var a = {
//     name :"Danish-chouhan",
//     class : "11th",
//     age : 17
// };
// var b = Object.values(a)
// document.write(b);

// function num(n){
//     this.number = n
// };
// Object.prototype.valueOf = function(){
//     return this.number
// }
// var a = new num("Danish ")
// document.write(a + "chouhan")

// function person(n){
//     this.name = n
// };
// var a = new person("Danish-chouhan")
// Object.prototype.toString = function pts(){
//     return `hlw i m ${this.name}`
// }
// document.write(a)

// var a = {
//     name : "Danish-chouhan"
// };
// Object.seal(a)
// a.name = "MR.Danish-chouhan"
// document.write(a.name)

// var a = {
//     name : "Danish-chouhan",
//     age : 17,
//     class : "11th"
// };
// document.write(Object.keys(a))

// var a = {
//     name : "Danish-chouhan",
//     age : 17,
//     class : "11th"
// };
// Object.seal(a)
// document.write(Object.isSealed(a))

// var a = {
//     name : "Danish-chouhan",
//     age : 17,
//     class : "11th"
// };
// Object.freeze(a)
// document.write(Object.isFrozen(a))

// var a = {
//     name : "Danish-chouhan"
// }
// document.write(Object.hasOwn(a , 'name'))

// var a = {}
// a.name = "Danish-chouhan"
// document.write(a.hasOwnProperty('name'))

// var a = {
//     name : "Danish-chouhan",
//     age : 17,
//     class : "11th"
// };
// document.write(Object.getOwnPropertyNames(a))

// var a = {
//     name : "Danish-chouhan",
//     age : 17,
//     class : "11th"
// };
// var b = Object.getOwnPropertyDescriptor(a ,'name')
// document.write(b.configurable)
// document.write(b.value)

// var a = {
//     name : "Danish-chouhan",
//     age : 17,
//     class : "11th"
// };
// var b = Object.getOwnPropertyDescriptors(a)
// document.write(b.name.writable)
// document.write(b.age.value)

// var a = ([
//     ["name" , "Danish"],
//     ["age" , 17]
// ])
// var b = Object.fromEntries(a)
// document.write(b.name)

// var a = {
//     name : "Danish-chouhan"
// }
// Object.freeze(a)
// a.name = "nxkbxkn"
// document.write(a.name)

// var a = {
//     name : "Danish-chouhan",
//     age : 17
// };
// for(const [keys,values] of Object.entries(a)){
//     document.write(`hlw my name is ${values}. and property is ${keys} `)
// }

// var a = {}
// Object.defineProperties(a , {
//     p1 : {
//         value : 17
//     }
// })
// document.write(a.p1)

// var a = {}
// Object.defineProperty(a , 'p1' ,{
//     value : 17
// });
// document.write(a.p1)

// var a = {
//     danish : function(){
//         document.write(`hlw my name is ${this.name}`)
//     }
// }
// var b = Object.create(a)
// b.name = "Danish"
// b.danish()