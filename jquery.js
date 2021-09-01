$(".BUTTON").click( function(){      
    let randomnumber1 = Math.floor(Math.random() * 6 + 1)
    let randomnumber2 = Math.floor(Math.random() * 6 + 1)
    
    $(".img1").attr("src", 'images/dice' + randomnumber1 + ".png");
    $(".img2").attr("src", 'images/dice' + randomnumber2 + ".png")
    
    if(randomnumber1 < randomnumber2){
        $(".head").text("Player 2 won");
    }
      
    
    else if (randomnumber1 > randomnumber2) {

        $(".head").text ( "Player 1 won");
    }

     else{
     $(".head").text("it is a tie. GAME OVER ");
     }
     
  })
















 







