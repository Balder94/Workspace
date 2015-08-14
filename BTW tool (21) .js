var bedrag

function herhalingBedrag() {
    return "Dit is het bedrag: € " + bedrag;
};

function alleenBTW() {
    return "De btw (21%) van het bedrag: € " + Math.round((bedrag * 0.21)*100)/100;
};

function bedragEnBTW() {
    return "Het bedrag met BTW (21%): € " + Math.round((bedrag * 1.21)*100)/100;
};


function berekenBTW() {
  bedrag = prompt("Vul hier in, het bedrag waar van je de hoge BTW (21%) wilt weten. " + '\n' + '\n' + "(format: 0.00 en niet 0,00)" + '\n' + '\n' + "klik op cancel/anuleren en daarna ok, als je wilt stoppen. Klik op Run(op de achtergrond) als je bent gestopt maar weer wil beginnen.");
    alert(herhalingBedrag() + '\n' + alleenBTW() + '\n' + bedragEnBTW());
};

do{
    berekenBTW()
    }
while(bedrag!==null)
