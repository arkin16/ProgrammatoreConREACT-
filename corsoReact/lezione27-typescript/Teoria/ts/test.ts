class Test {
    txt: string;
    constructor(txt: string) {
        this.txt = txt;
    }
}

const t = new Test("Ciao a tutti");
t.txt = t.txt + "!!!";
console.log(t.txt);