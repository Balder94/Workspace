var Bedrag
var ExBTW
var BTW

function herhalingBedrag() {
	return "Dit is het bedrag(incl.): € " + Bedrag;
};

function bedragExBTW() {
	ExBTW = (Math.round((Bedrag/1.21)*100)/100).toFixed(2);
	return "Het bedrag exclusief BTW: € " + ExBTW;
};

function alleenBTW() {
	BTW = (Math.round((Bedrag - ExBTW)*100)/100).toFixed(2);
	return "De BTW van het bedrag: € " + BTW;
};

function berekenBTW() {
	Bedrag = prompt("Vul hier in, het bedrag(inclusief) waar van je de hoge BTW (21%) wilt weten. " + '\n' + '\n' + "klik op cancel/anuleren en daarna ok, als je wilt stoppen. Klik op Run(op de achtergrond) als je bent gestopt maar weer wil beginnen.").replace(/,/g, '.');
    //this .replace makes cancel work instantly instead of finishing the alert first (because 'null.replace' gives an error. Its a nice by-effect of '.replace' but not a good way of doing it.)
	alert(herhalingBedrag() + '\n' + bedragExBTW() + '\n' + alleenBTW());
};


do {
	berekenBTW()
}
while(Bedrag!==null);


// 21% hosted at http://jsfiddle.net/p5c465yg/10
// 6% hosted at http://jsfiddle.net/r4vLyaam/3

