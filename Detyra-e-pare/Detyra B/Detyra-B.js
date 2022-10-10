
/* Shuma e pesëdhjetë numrave natyrorë të parë natyrorë*/
document.write('<br>');
document.write('<br>');
let shuma = 0;

function shumaEnumraveN(n){
for(var numri=1; numri<=n; numri++){
     shuma += numri;
}
return document.write("Shuma e pesëdhjetë numrave natyrorë të parë natyrorë është: "+shuma +".<br>");

}
/* Funksioni që kthen si rezultat perimetrin dhe syprinën e trekendeshit*/
function syprina1(a,b,c,ha){
    let syprina = (a*ha)/2;
    let perimetri = (a+b+c);

    document.write("Perimetri i trekëndëshit me brinjë a,b,c është: " + perimetri + " cm.");
    document.write('<br>');
    document.write("Syprina e trekëndëshit me brinjë a,b,c dhe me lartësi ha është: " + syprina+ " cm^2.");
    document.write('<br>');
}
/* Funksioni që kthen si rezultat perimetrin dhe syprinën e drejtkendeshit*/
function syprina2(a,b){
    let syprina = (a*b);
    let perimetri = 2*(a+b);
    
    document.write("Perimetri i drejtkëndëshit me brinjë a,b është: " + perimetri +" cm.");
    document.write('<br>');
    document.write("Syprina e drejtkëndëshit me brinjë a,b është: " + syprina+ " cm^2.");
}

shumaEnumraveN(50);
syprina1(40,13,37,12); /* Keni kujdes gjatë dhënies së shifrave të brinjëve
* jo të gjitha vlerat krijojnë një trekëndësh.*/
syprina2(11,17);
