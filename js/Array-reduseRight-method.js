var a = [[1,2],[3,2],[2,3],[5,4]]
var b = a.reverse()
var fn = b.reduceRight((d,c) => d.concat(c))

document.write(fn)

