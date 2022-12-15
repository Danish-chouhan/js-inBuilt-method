// var a = {
//     PI : function(){
//         document.write(`hlw i m ${this.name}. and i m a ${this.isHuman}`)
//     }
// }
// var b = Object.create(a);
// b.name ="Danish-chouhan";
// b.isHuman = true;
// b.PI()

var a ={}
Object.defineProperties(a ,{
    aa :{
        age : 17,
        name : "Danish-chouhan"
    },
    bb :{}
})
document.write(a.aa)