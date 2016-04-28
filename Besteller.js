var BLR = {Naam:"LangeRozijnen", Afkorting:"BLR", Code:"54500", Aantal:"44", Inkoopprijs:"1.03", Verkoopprijs:"1.35", Adviesprijs:"1.40", SVE:"4",
   VerliesdoorAnderePrijs:function(){return (this.Adviesprijs - this.Verkoopprijs)*this.Aantal;},
   InkoopprijsTotaal:function(){return this.Inkoopprijs * this.Aantal;},
   VerkoopprijsTotaal:function(){return this.Verkoopprijs * this.Aantal;},
   AdviesprijsTotaal:function(){return this.Adviespprijs * this.Aantal;},
   VerliesdoorAnderePrijsTotaal:function(){return this.AdviesprijsTotaal - this.VerkoopprijsTotaal;},
   };


function BestelLijst(Afkorting) {
   do {console.log(Afkorting.Code + " " + Afkorting.Aantal);}
   while (prompt("Typ product afkorting.") !== null && prompt("Typ product aantal.") !== null);
}
BestelLijst(BLR);

**********************************************************************************************************************
function BestelLijst() {
   do {
      var Afkorting = prompt("Typ product afkorting.")
      var Aantal = prompt("Typ product Aantal")
      console.log(Afkorting.Code + " " + Aantal);}
   while (Afkorting !== null);
}
BestelLijst();
