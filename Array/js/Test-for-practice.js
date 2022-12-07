var a = ["danish","chouhan","fayyaz","urrehman"]
a.unshift("Danish")
document.write(a + "<br>")

var b = ["Danish","chouhan","fayyaz","urrehman"]
var bb = b.toString()
document.write(b + "<br>")

var c = ["Danish","chouhan","fayyaz","urrehman",1,2,3,4,5]
var cc = c.slice(2,7)
document.write(cc + "<br>")

var d = ["Danish","Ab","Chouhan","Fayyaz","Urrehman"]
d.sort()
document.write(d + "<br>")

var e = [1,2,3,5,6,7,8,9,10]

var fn = e.some((ab) => ab < 11)
document.write(fn + "<br>")

var f = ["Danish","chouhan","fayyaz","urrehman"]
f.splice(1,0,"-") 
document.write(f + "<br>")

var g = ["Danish","Danish","chouhan","fayyaz","urrehman"]
g.shift() 
document.write(g + "<br>")

var h = ["Danish","chouhan","fayyaz","urrehman"]
h.reverse()
document.write(h + "<br>")

var hh = [1,2,3,4,5,6,7,8,9,10]
var fnn = hh.reduce((abb,acc) => abb + acc )

document.write(fnn + "<br>")

var i = [[1,2],[3,4],[5,6]]

i.reverse()
var dn = i.reduceRight((da,dc) => da.concat(dc))
document.write(dn + "<br>")

var ii = ["Danish","chouhan","fayyaz","urrehman"]
ii.pop()
document.write(ii + "<br>")

var iii = ["Danish","chouhan","fayyaz","urrehman"]
iii.push("uzair")
document.write(iii + "<br>")

document.write(Array.of(1,2,3,4,5,7,8,9,10) + "<br>")


var j = [1,2,3,4,5,6,7,8,9,10]
var jj = j.map((x) => x * 3)
document.write(jj + "<br>")


var k = ["Danish","chouhan","fayyaz","Danish","urrehman"]
var kk = k.lastIndexOf("Danish")
document.write(kk + "<br>")

var l = ["a","b","c"]

var ll = l.keys()

for(var lll of ll){
    document.write(lll + "<br>")
}


var m = ["Danish","chouhan","fayyaz","urrehman"]
var mm = m.join("/")
document.write(mm + "<br>")


var n = ["Danish","chouhan","fayyaz","urrehman"]
var nn = Array.isArray(n)
document.write(nn + "<br>")


var o = ["Danish","chouhan","fayyaz","urrehman"]
var oo = o.indexOf("Danish")
document.write(oo + "<br>")


var p = ["Danish","chouhan","fayyaz","urrehman"]
var pp = p.includes("Danish")
document.write(pp + "<br>")

document.write(Array.from("danish") + "<br>")

var q = ["a","b","c","d"]
q.forEach((Element) => document.write(Element) + "<br>")
document.write("<br>")
var qq = [1,2,3,4,[[[[5,6]]]]]

var qqq = qq.flat(Infinity)

document.write(qqq + "<br>")

var r = [1,2,[3,4],[5,6],[7,8]]

var rr = r.flatMap((r) => r)
document.write(rr + "<br>");


var s = [1,2,3,4,5,6,7,8,9,10]
var ss = s.find((Element) => Element < 3)
document.write(ss + "<br>")


var s = [1,2,3,4,5,6,7,8,9,10]
var ss = s.findIndex((Element) => Element < 3)
document.write(ss + "<br>")


var s = [1,2,3,4,5,6,7,8,9,10]
var ss = s.findLastIndex((Element) => Element < 8)
document.write(ss + "<br>")


var s = [1,2,3,4,5,6,7,8,9,10]
var ss = s.findLast((Element) => Element < 3)
document.write(ss + "<br>")


var s = [1,2,3,4,5,6,7,8,9,10]
var ss = s.find((Element) => Element < 3)
document.write(ss + "<br>")


var s = [1,2,3,4,5,6,7,8,9,10]
var ss = s.find((Element) => Element < 3)
document.write(ss + "<br>")

var u = ["Danish","chouhan","fayyaz","urrehman"]

var uuu = u.filter((word) => word.length > 6)

document.write(uuu + "<br>")

var v = [1,2,3,4,5,6,7,8]
var vv = v.fill(2,1,5)
document.write(vv + "<br>")

var w = [1,2,3,4,5,6,7,8,9,10]

var ww = w.every((yy) => yy < 11)
document.write(ww + "<br>")

var x = ['Danish','chouhan','fayyaz','urrehman']
var xx = x.at(2)
document.write(xx + "<br>")

var y = [1,2,3,4,5,6]
var yy = [7,8,9,10]
var yyy = y.concat(yy)
document.write(yyy + "<br>")

var z = ['a','b','c','d']
var zz = z.entries()
document.write(zz.next().value)
document.write(zz.next().value)