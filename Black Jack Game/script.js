function genarate () {

    let gameRes = document.getElementById("massage").innerHTML;

    if ( gameRes == "You Lost!") {

        alert("Game Over! Press Restart");
        document.getElementById("massage").innerHTML = "Game Over! Restart.";

    } else if (gameRes == "You Won!" ) {
        
        alert("Game Over! Press Restart");
        document.getElementById("massage").innerHTML = "Game Over! Restart.";

    } else if ( gameRes == "Game Over! Restart.") {

        alert("Game Over! Press Restart");
        document.getElementById("massage").innerHTML = "Game Over! Restart.";

    } else {    

    let x ;

    do {
        
     x = Math.floor( Math.random() * 100 / 7.6);

    } while ( x==0 );
    // alert(x);

    let img = document.createElement("img");
    img.src = ("images/" + x + ".png");
    let addDiv = document.getElementById("addingImg");
    img.height = 400;
    img.width = 280;
    addDiv.appendChild(img);

    let previous = parseInt (document.getElementById("total").innerHTML);
    let newTotal = previous + x ;
    document.getElementById("total").innerHTML = newTotal;

    if ( newTotal < 21 ) {
        document.getElementById("massage").innerHTML = "Genarate another card ?";

    }else if ( newTotal == 21 ) {
        document.getElementById("massage").innerHTML = "You Won!";
        alert("Congratulations! You won :D ");
        document.getElementById("restart").style.display = "block";

    }else {
        document.getElementById("massage").innerHTML = "You Lost!";
        alert("Sad :( Try again.. ");
        document.getElementById("restart").style.display = "block";
    }
    }

    document.getElementById("massage").style.backgroundColor = "yellow";

} 

function restart () {

    location.reload ();

}
