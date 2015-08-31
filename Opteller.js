Option 1: 
var calculation

function RecieveInput() 
{
	calculation = prompt("Typ hier de getallen die je bij elkaar wil optellen met een spatie tussen ieder getal.")
}

function MakeReadable()
{
    while (calculation.indexOf("  ") !== -1) 
    { calculation = calculation.replace(/  /g, " ") };
    return calculation.split(" ");
    }

function GiveOutput
{
   MakeReadable() * * * *  
}


function Opteller()
{
	Recieveinput()
	
	GiveOutput()
}

Opteller()
///////////////////////////////////////////

Option 2 : 

var Result
var Input = prompt("Type in the numbers, seperated by spaces")
alert("5".toFixed(2))

for (Result=1; Result <100; Result += Input) {
    
}

alert(Result)


//things i want to search in google when internet comes back up
//  "extract seperate strings from prompt javascript" "diffs'" "indentation, spacesVStabs" "function names capitalization, why ?"
