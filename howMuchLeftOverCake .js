/*Feature 1
function howMuchLeftOverCake1 ( numberOfPieces,numberOfPeople){
    Remainder = numberOfPieces%numberOfPeople;
    console.log("the remaining pieces of cake is ",Remainder);
}
howMuchLeftOverCake1(12,5);*/

//Feature 2
function howMuchLeftOverCake2 ( numberOfPieces,numberOfPeople){
    Remainder = numberOfPieces%numberOfPeople;
    if (Remainder==0)
        console.log("No leftovers for you!");
    else if (Remainder<=2 && Remainder>0)
        console.log("You have some leftovers");
    else if (Remainder>= 3 && Remainder<=5)
        console.log("You have leftovers to share");    
    else (Remainder>5)
        console.log("Hold another party!");
    
}
howMuchLeftOverCake2(12,6);