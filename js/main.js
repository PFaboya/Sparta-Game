document.addEventListener("DOMContentLoaded", function(event){
  function startGame(){
    var button = document.getElementById("start");
    button.addEventListener("click", function(){
      button.value = "RESTART"
      var heading = document.getElementsByTagName("h2")
      for (var i = 0; i < heading.length; i++) {
       heading[i].innerHTML = ""
      }
      document.getElementsByTagName("h3")[0].innerHTML = ""
      function move() {
        var obstacle = document.getElementsByClassName("bush")[0];
        var elem = document.getElementsByClassName("deer")[0];
        obstacle.className = "col-lg-1 col-md-1 col-sm-1 bush";
        elem.className = "col-lg-1 col-md-1 col-sm-1 deer";
        speed = 0.5;
        currentPos = -500;
        // Reset the element
        elem.style.bottom = 0+"px";
        elem.style.top = "auto";
        var motionInterval = setInterval(function() {
          currentPos += speed;
          if (currentPos >= -400 && speed >= 0) {
           currentPos = -400;
           speed = -1 * speed;
           // elem.style.width = parseInt(elem.style.width)*2+"px";
           // elem.style.height = parseInt(elem.style.height)*2+"px";
         }
        if (currentPos <= -500 && speed < 0) {
          currentPos = -500;
          speed = -1 * speed;
         }
         // clearInterval(motionInterval);

        elem.style.bottom = currentPos+"px";
      });
      }
      move()
    })
  }

  function mouseClick(){
    var points = 0
    // document.getElementById("points").innerHTML = points
    document.getElementById("game-screen").style.cursor = "crosshair";
    var hit = document.getElementsByClassName("deer")[0]
    hit.addEventListener("click", function(){
      console.log("it works")
      points += 10
      document.getElementById("points").innerHTML = points
    })
  }

  startGame()
  mouseClick()
})
