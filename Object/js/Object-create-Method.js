var a ={
    pi : function(){
        document.write(`my name is ${this.name}.and i am studing in class ${this.class}.and i m human ${this.human}.`)
    }
}
var b = Object.create(a);
b.name = "Danish-chouhan"
b.class ="11th-scince-maths"
b.human = true;
b.pi()
// in this i m createing a method that name is create method in this we are giving space and then we return the names as u seen in the upper value