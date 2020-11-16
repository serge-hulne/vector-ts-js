"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vector_1 = require("./vector");
// Test:
function testing() {
    var v = new vector_1.Vector();
    v.append("A");
    v.append("B");
    v.append("C");
    console.log(v.a);
    console.log("- - -");
    console.log("delete:");
    v.delete("B");
    console.log(v.a);
    console.log("- - -");
    console.log("append:");
    v.append("X");
    console.log(v.a);
    console.log("- - -");
    console.log("prepend:");
    v.prepend("Y");
    console.log(v.a);
    console.log("- - -");
    console.log("concat:");
    var t = new vector_1.Vector();
    var u = new vector_1.Vector();
    t.append("A");
    t.append("B");
    t.append("C");
    u.append("X");
    u.append("Y");
    u.append("Z");
    var s = t.concat(u);
    console.log(s);
    console.log("- - -");
    console.log("clear:");
    s.clear();
    console.log(s);
    console.log("- - -");
    console.log("t :");
    console.log("t.deleteAt(0)");
    console.log({ t: t });
    t.deleteAt(0);
    console.log({ t: t });
    t.insertAt(0, "Alpha");
    console.log({ t: t });
    console.log("- - -");
    console.log("substitute");
    t.substituteAt(2, "Gamma");
    //t.substituteAt(3, "Delta");
    console.log({ t: t });
    console.log("- - -");
    console.log("insertAtEnd");
    t.insertAtEnd("X");
    console.log({ t: t });
    console.log("- - -");
    console.log("deleteAtEnd");
    t.deleteAtEnd();
    console.log({ t: t });
    console.log("- - -");
    console.log("deleteAtStart");
    t.deleteAtStart();
    console.log({ t: t });
    console.log("- - -");
    console.log("insertAtStart");
    t.insertAtStart("AAA");
    console.log({ t: t });
    console.log("- - -");
    console.log("substituteAt");
    t.substituteAt(1, "BBB");
    console.log({ t: t });
    console.log("- - -");
    console.log("substituteAt");
    t.substitute("AAA", "Alpha");
    console.log({ t: t });
    console.log("delete");
    t.delete("Gamma");
    console.log({ t: t });
    t.delete("Gamma");
    console.log({ t: t });
}
testing();