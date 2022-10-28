//grupi A
var x = true;
var y = 0;
let z = 1;
document.writeln(!x == y && !y !== z || z != x);
document.writeln(x === z && x != z || y == !z);
document.writeln(!z == y || !z != !x || z != !y);

document.writeln('<br>')
// grupi B
let a = false;
var b = 1;
var c = 0;

document.writeln(!a == b && !b !== c || c != a);
document.writeln(a === c && a != c || b == !c);
document.writeln(!c == b || !c != !a || !c !== !a);
