//this code will built a loop that verify if runner 
//every  02 miles does he will be rewarded by piece of candy 
// start point 0 
// stop point 6 
//increment every 02 miles
var runner =0
var time= 5.5
var timeRunner =10

function GiveCandy2_6(runner,timeRunner){

    for (runner= 0; runner < 6; runner++) {
        if (runner==0){
            console.log("We've Only Just Begun")
        }

        else    
            if (runner%2==0){

                if(timeRunner<= time){
                    console.log(runner)
                    console.log("Great, You win a sweet candy,",runner,"miles checK point");
                }
            else 
                console.log("Try more to do best");
        }
    
    }
}     
GiveCandy2_6(runner,timeRunner);

           
