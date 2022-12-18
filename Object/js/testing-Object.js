// var a = {
//     danish : function(){
//         document.write(`hlw i m ${this.name}`)
//     }
// };
// var b = Object.create(a);
// b.name = "Danish-chouhan"
// b.danish()

// var a = {}
// Object.defineProperties(a , {
//     p1 : {
//         value : 17
//     },
//     p2 : {
//         value : 18
//     },
//     p3 : {
//         value : 19
//     }
// });
// document.write(a.p3)
// var a = {}
// Object.defineProperty(a , 'p1',{
//     value : 17
// });
// document.write(a.p1)
// var a = {
//     aa : 17,
//     bb : "Danish-chouhan"
// }
// for(var [key,value] of Object.entries(a)){
//     document.write(`${key} ${value}`)
// }

// var a = {
//     name : "Danish-chouhan"
// };
// Object.freeze(a)
// a.name = "chouhan";
// document.write(a.name)

// var a = {
//     name : "Danish-chouhan"
// };
// var b = Object.getOwnPropertyDescriptor(a , 'name');
// document.write(b.configurable)
// document.write(b.value)

// var a = {
//     name : "Danish-chouhan"
// };
// var b = Object.getOwnPropertyDescriptors(a)
// document.write(b.name.writable)
// document.write(b.name.value)

// var a = {
//     name : "Danish-chouhan",
//     age : 17,
//     class : "11th"
// };
// var b = Object.getOwnPropertyNames(a)
// document.write(b);

// var a = new Map([
//     ['name' , 'Danish-chouhan'],
//     ['age' , 17]
// ])
// var b = Object.fromEntries(a)
// document.write(b)

var a = {
    name : "Danish-chouhan"
};
document.write(Object.hasOwn(a,"name"))
document.write(Object.hasOwn(a , "class"))