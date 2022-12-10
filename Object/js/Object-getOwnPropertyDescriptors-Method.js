var a = {
    Danish : "Danish-chouhan"
};
var b = Object.getOwnPropertyDescriptors(a);
document.write(b.Danish.writable);
document.write(b.Danish.value)