// var a = {
//     danish : function(){
//         document.write(`hlw i m ${this.name}`)
//     }
// };
// var b = Object.create(a)
// b.name = "Danish-chouhan";
// b.danish()

// var a = {};
// Object.defineProperties(a ,{
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

var a = {}
Object.defineProperty(a , 'p1' , {
    value : 17
});
a.p1 = 118
var b = a.p1
document.write(b)