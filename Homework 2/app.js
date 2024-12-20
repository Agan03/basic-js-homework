//Homework 1

function gjejTipin(input){

const tipi=typeof input;
console.log(`Tipi eshte ${tipi}`);
return tipi;

}

gjejTipin({});
gjejTipin(4);
gjejTipin(false);
gjejTipin("Agan");

//Homework 2
 
function dogsAge(dAge){

    let result = dAge/7;
    console.log(`Dog years converted to human years are: ${result}`);
    return result;
}

let result = dogsAge(21);

function HumansAge(hAge){

    let result=hAge*7;
    console.log(`Human years converted to dog years are: ${result}`);
    return result;   

}

let result2 = HumansAge(7);

//Homework 3

function atmMachine(amount){

    
    let input=parseInt(prompt("How much you want to take from ATM?"));

    let result=input;

    if(result>amount){
       alert(`Not enough money`);
    }
    else if (result<=amount){
       alert(`You withdrew ${result}$ 
        you have ${amount-result}$ left`);
            return result;
        
    }

}
 let res = atmMachine(500);
    
    