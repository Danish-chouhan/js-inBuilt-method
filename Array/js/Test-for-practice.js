// var a = ['danish','chohan']
// document.write(a.length)

// var a = ['danish',"chouhan"]
// document.write(a.at(1))

// var a = [1,2,3,4,5]
// var b = [6,7,8,9,10]
// document.write(a.concat(b))

// var a = [1,2,3,4,5]
// document.write(a.copyWithin(2,1,5))

// var a = ["a","b","c","d"]
// var b = a.entries()
// document.write(b.next().value)
// document.write(b.next().value)

var a = [1,2,3,4,5,6,7,8,9,10]
var b = a.every(dan)
function dan(x){
    return x < 11
}
document.write(b)