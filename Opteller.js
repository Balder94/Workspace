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



//things i want to search in google when internet comes back up
//  "extract seperate strings from prompt javascript" "diffs'" "indentation, spacesVStabs" "function names capitalization, why ?"