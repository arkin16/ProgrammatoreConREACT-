// let y = 4;
function f1(x, y) {
    //let y = Math.random();
    return x+y;
}

const f2 = function(x,y){
    return x+y;
}

const f3 = (x,y) => {
    return x+y;
}

f1(5, 4);
f2(5, 4);
f3(5, 4);