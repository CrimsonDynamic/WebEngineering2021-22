for(let i = 1; i <= 100; i++){
    if(i % 3 == 0){
        console.log("Tic ");
    }
    if(i % 5 == 0){
        console.log("Tac ");
    }
    if(i % 3 == 0 && i % 5 == 0){
        console.log("TicTac ");
    }
    else{
        console.log(i + " ");
    }    
}