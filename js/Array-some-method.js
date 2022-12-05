var a = [2,3,4,5,6,7,8,9,10]

var b = a.some(fn)

function fn(dan){
  return dan < 11
}
document.write(b)