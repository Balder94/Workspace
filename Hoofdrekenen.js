var Cancel;
var Check;
function Hoofdrekenen() {
   var Number1 = Math.floor((Math.random() * 10) + 1);
   var Number2 = Math.floor((Math.random() * 10) + 1);
   Sum = prompt(Number1 + "*" + Number2 + "=" );
   Check = Number1*Number2;
   if (Sum!=Check) {
      prompt("Try again please." + Number1 + "*" + Number2 + "=");
   }
}


do{Hoofdrekenen();} while (Sum !== false);
