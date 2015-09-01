var bedrag
var BTW
var ExBTW

function herhalingBedrag() {
	return "Dit is het bedrag(incl.): € " + bedrag;
};

function bedragExBTW() {
	ExBTW = (bedrag/1.21).toFixed(2);
	return "Het bedrag exclusief BTW: € " + (Math.round(ExBTW*100)/100).toFixed(2);
};

function alleenBTW() {
	BTW = (Math.round((ExBTW * 0.21)*100)/100).toFixed(2);
	return "De BTW van het bedrag: € " + BTW;
};

function berekenBTW() {
	bedrag = prompt("Vul hier in, het bedrag(inclusief) waar van je de hoge BTW (21%) wilt weten. " + '\n' + '\n' + "(gebruik punt '.' en niet komma',')" + '\n' + '\n' + "klik op cancel/anuleren en daarna ok, als je wilt stoppen. Klik op Run(op de achtergrond) als je bent gestopt maar weer wil beginnen.");
	alert(herhalingBedrag() + '\n' + bedragExBTW() + '\n' + alleenBTW());
};


do {
	berekenBTW()
}
while(bedrag!==null);


// 21% hosted at http://jsfiddle.net/p5c465yg/9
// 6% hosted at http://jsfiddle.net/r4vLyaam/2
