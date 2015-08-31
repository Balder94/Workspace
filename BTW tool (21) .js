var bedrag
var BTW
var MinBTW

function herhalingBedrag() {
	return "Dit is het bedrag: € " + bedrag;
};

function alleenBTW() {
	BTW = (Math.round((bedrag * 0.21)*100)/100).toFixed(2); 	    
	return "De btw (21%) van het bedrag: € " + BTW;
};

function bedragMinBTW() {
	MinBTW = (bedrag - BTW);
	return "Het bedrag min de BTW (21%): € " + (Math.round(MinBTW*100)/100).toFixed(2);
};


function berekenBTW() {
	bedrag = prompt("Vul hier in, het bedrag waar van je de hoge BTW (21%) wilt weten. " + '\n' + '\n' + "(gebruik punt '.' en niet komma',')" + '\n' + '\n' + "klik op cancel/anuleren en daarna ok, als je wilt stoppen. Klik op Run(op de achtergrond) als je bent gestopt maar weer wil beginnen.");
	alert(herhalingBedrag() + '\n' + alleenBTW() + '\n' + bedragMinBTW());
};

do {
	berekenBTW()
}
while(bedrag!==null);


// 21% hosted at http://jsfiddle.net/p5c465yg/8/
// 6% hosted at http://jsfiddle.net/r4vLyaam/1
