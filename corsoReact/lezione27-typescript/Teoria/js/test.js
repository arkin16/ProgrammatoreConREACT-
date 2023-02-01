"use strict";
class Test {
    constructor(txt) {
        this.txt = txt;
    }
}
const t = new Test("Ciao a tutti");
t.txt = t.txt + "!!!";
console.log(t.txt);
