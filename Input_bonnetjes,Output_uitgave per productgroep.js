function date() {
    var Date = prompt("Wat is de datum van dit bonnetje ? (dd-mm-jjjj)");
}

var i;
function products() {
    var ProductGroup = prompt("Typ de productgroep");
    var ProductPrice = prompt("Typ de prijs");

    for (;ProductGroup !== null && ProductPrice !== null; i=i+1);
    //for loop condition crashes
    return i ;
}

products();




function input(Date,ProductGroup,ProductPrice) {
var log = Date +"|"+ ProductGroup +"|"+"€"+ ProductPrice;
return log;
}

input("21-10-2015","Vega","5,68");
