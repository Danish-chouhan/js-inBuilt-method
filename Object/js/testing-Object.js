var a = {
 danish : function() {
    document.write(`hlw i m ${this.name}`)
 }   
};
var b = Object.create(a)
b.name = "Danish-chouhan"
b.danish()