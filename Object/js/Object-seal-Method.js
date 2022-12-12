var a = {
    Name : "Danish-chouhan"
}
Object.seal(a);
a.Name = 33;
// delete a.Name
document.write(a.Name)

//property willl be not deleted after sealing