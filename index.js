// Code your solutions in this file
function writeCards(names, adj){
    let thank = [];
    for (let x = 0; x < names.length; x++){
        thank[x] = `Thank you, ${names[x]}, for the wonderful ${adj} gift!`;   
    }
    return thank;
};

function countDown(n){
    while (n >= 0){
        console.log(n);
        n--;
    }
};