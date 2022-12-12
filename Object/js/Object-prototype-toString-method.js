function a(name){
    this.Name = name;
};
var b = new a("Danish-chouhan");
a.prototype.toString = function(){
    return `Hlw assalamualaikum i want to introduse myself in front of you so . My name is ${this.Name}.and my age is 17`
}
document.write(b.toString())