//grupi A
var x = true;
var y = 0;
let z = 1;
let w = false;
document.writeln(!x == y && !y !== z || w != !x && w == y);
document.writeln(x !== z && x != z || y == !z && !w != !y);
document.writeln(!w == z || w != y && z != !y || x == z && y === w);
document.writeln(w !== x && w === y);
document.writeln('<br>')

// grupi B
let a = false;
var b = 1;
var c = 0;
let d = true;

document.writeln(!a == b && !b !== c || c != a && d == b);
document.writeln(c != !d || a === c && b == !a && !d != !b);
document.writeln(!c !== !a || b === d || !c != b && !c == !a || a !== d);
document.writeln(d === b && d !== !d);
