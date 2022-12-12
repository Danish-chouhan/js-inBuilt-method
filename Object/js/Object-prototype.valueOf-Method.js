function a(n){
    this.num = n;
}
a.prototype.valueOf = function(){
    return this.num;
}
var b = new a(17);
document.write(b + 3)