var a = {
    danish : 200
};
var b = Object.getOwnPropertyDescriptor(a,'danish');
document.write(b.configurable)
document.write(b.value)