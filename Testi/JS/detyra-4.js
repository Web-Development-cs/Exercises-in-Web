//grupi B
function syprina(a,b) {

    rezultati = (a >= 0 && b >= 0) ? document.writeln(a*b) :
                (a < 0 || b < 0) ? document.writeln("Njera brinje => negative") : 
                (a < 0 && b < 0) ? document.writeln("Brinjet => negative"):
                                   document.writeln("Nuk mund te njehsohet syprina") 
return rezultati;
}
syprina(-10, -5);

document.writeln('<br>')

//grupi A
function perimetri(x,y,z) {

    rezultati = (x >= 0 && y >= 0 && z>=0) ? document.writeln(x+y+z) :
            (x < 0 && y < 0 && z<0) ? document.writeln("Brinjet => negative") : 
            (x < 0 || y < 0 || z < 0) ? document.writeln("Perimetri < 0"):
                                   document.writeln(x+y+z) 
return rezultati;
}
perimetri(10, 5, -10);


window.prompt


