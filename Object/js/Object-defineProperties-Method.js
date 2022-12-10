var a = {};
Object.defineProperties(a,{
    aa : {
        value : 200
    },
    bb :{ value : 300
    }
});

document.write(a.bb + a.aa)

// Syntax
// Object.defineProperties(obj, props)
