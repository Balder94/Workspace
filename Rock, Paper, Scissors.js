do{
confirm("Hello. This is a Rock Paper Scissors game for 2 players. You will be using the same keyboard and therefore it is neccesary that you look the other way while the other player is making their choice. When you start, a new dialog will pop up asking the first player to make their choice. Then a second dialog for the other player. After this a dialog will display the results. OK can be used to start another game and Cancel to quit. Click OK to begin.");

var ChoiceP1 = prompt("Rock, Paper, Scissors (Type your choice below. To prevent the other person from hearing what you type, R, P and S work as well.)");


if(ChoiceP1=="Rock" || ChoiceP1=="rock" || ChoiceP1=="R" || ChoiceP1=="r" || ChoiceP1=="ROCK"|| ChoiceP1== "Steen" || ChoiceP1=="Sten")
{
    ChoiceP1=1;
}
else if (ChoiceP1=="Paper" || ChoiceP1=="paper" || ChoiceP1=="P" || ChoiceP1=="p" || ChoiceP1=="PAPER"|| ChoiceP1=="Papier" || ChoiceP1=="Påse" || ChoiceP1=="Papper")
//ENG,1NL,2SV
{
    ChoiceP1=2;
}
else if (ChoiceP1=="Scissors" || ChoiceP1=="scissors" || ChoiceP1=="S" || ChoiceP1=="s" || ChoiceP1=="Scisors" || ChoiceP1=="scisors" || ChoiceP1=="Schaar" || ChoiceP1=="Sax")
{
    ChoiceP1=3;
}

var ChoiceP2 = prompt("Rock, Paper, Scissors (Type your choice below. To prevent the other person from hearing what you type, R, P and S work as well.)");

if(ChoiceP2=="Rock" || ChoiceP2=="rock" || ChoiceP2=="R" || ChoiceP2=="r" || ChoiceP2=="ROCK"|| ChoiceP2=="Steen" || ChoiceP2=="Sten")
{
    ChoiceP2=1;
}
else if (ChoiceP2=="Paper" || ChoiceP2=="paper" || ChoiceP2=="P" || ChoiceP2=="p" || ChoiceP2=="PAPER"|| ChoiceP2=="Papier" || ChoiceP2=="Påse" || ChoiceP2=="Papper")
//ENG,1NL,2SV
{
    ChoiceP2=2;
}
else if (ChoiceP2=="Scissors" || ChoiceP2=="scissors" || ChoiceP2=="S" || ChoiceP2=="s" || ChoiceP2=="Scisors" || ChoiceP2=="scisors" || ChoiceP2=="Schaar" || ChoiceP2=="Sax")
{
    ChoiceP2=3;
}

if(ChoiceP1 !== 1 && ChoiceP1 !== 2 && ChoiceP1 !== 3)
{
x=confirm("The computer did not understand Player1's choice. Please try again. (Recognized answers are: Rock, rock, R, r, Steen, Sten. Paper, paper, P, p, Papier, Påse. Scissors, scissors, S, s, Schaar, Sax. )");

}

if(ChoiceP2 !== 1 && ChoiceP2 !== 2 && ChoiceP2 !== 3)
{
x=confirm("The computer did not understand Player2's choice. Please try again. (Recognized answers are: Rock, rock, R, r, Steen, Sten. Paper, paper, P, p, Papier, Påse. Scissors, scissors, S, s, Schaar, Sax. )");
}

if(ChoiceP1==1 && ChoiceP2==1)
{
    x=confirm("Rock hits Rock. Try Again.");
}
if(ChoiceP1==1 && ChoiceP2==2)
{
    x=confirm("Paper envelopes Rock. Player 2 wins! ");
}
if(ChoiceP1==1 && ChoiceP2==3)
{
    x=confirm("Rock crushes Scissors. Player 1 wins!");
}
if(ChoiceP1==2 && ChoiceP2==2)
{
    x=confirm("Paper and Paper. Try Again");
}
if(ChoiceP1==2 && ChoiceP2==3)
{
    x=confirm("Scissors cuts Paper. Player 2 wins! ");
}
if(ChoiceP1==2 && ChoiceP2==1)
{
    x=confirm("Paper envelopes Rock. Player 1 wins! ");
}
if(ChoiceP1==3 && ChoiceP2==3)
{
    x=confirm("Scissors cut Scissors. Try Again ");
}
if(ChoiceP1==3 && ChoiceP2==1)
{
    x=confirm("Rock crushes Scissors. Player 2 wins! ");
}
if(ChoiceP1==3 && ChoiceP2==2)
{
    x=confirm("Scissors cut Paper. Player 1 wins! ");
}
}
    while (x===true);
