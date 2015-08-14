var bedrag

function herhalingBedrag() {
    return "Dit is het bedrag: € " + bedrag;
};

function alleenBTW() {
    return "De btw van het bedrag: € " + Math.round((bedrag * 0.21)*100)/100;
};

function bedragEnBTW() {
    return "Het bedrag met BTW: € " + Math.round((bedrag * 1.21)*100)/100;
};


function berekenBTW() {
  bedrag = prompt("Vul hier in, het bedrag waar van je de btw wilt weten. " + '\n' + '\n' + "(format: 0.00 en niet 0,00)");
    alert(herhalingBedrag() + '\n' + alleenBTW() + '\n' + bedragEnBTW());
};

do{
    berekenBTW()
    }
while(bedrag!==null)
