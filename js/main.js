document.addEventListener("DOMContentLoaded", function(event){
  function startGame(){
    var button = document.getElementById("start");
    button.addEventListener("click", function(){
      document.getElementsByClassName("menu")[0].innerHTML = ""
      var heading = document.getElementsByTagName("h2")
      for (var i = 0; i < heading.length; i++) {
       heading[i].innerHTML = ""
      }
      document.getElementsByTagName("h3")[0].innerHTML = ""
      function move1() {
        var deer1 = document.getElementById("deer1");
        var bush1 = document.getElementById("bush1");
        // var elem = document.getElementById("deer1");
        bush1.className = "col-lg-1 col-md-1 col-sm-1 bush";
        deer1.className = "col-lg-1 col-md-1 col-sm-1 deer";
        var speed = 0.5;
        var currentPos = -440;
        // Reset the element
        deer1.style.bottom = 0+"px";
        deer1.style.top = "auto";
        var motionInterval1 = setInterval(function() {
          currentPos += speed;
          if (currentPos >= -340 && speed >= 0) {
           currentPos = -340;
           speed = -1 * speed;
         }
        if (currentPos <= -440 && speed < 0) {
          currentPos = -440;
          speed = -1 * speed;
         }

        deer1.style.bottom = currentPos+"px";
      });
      }
      function move2() {
        var deer2 = document.getElementById("deer2");
        var bush2 = document.getElementById("bush2");

        bush2.className = "col-lg-1 col-md-1 col-sm-1 bush";
        deer2.className = "col-lg-1 col-md-1 col-sm-1 deer";
        var speed = 0.5;
        var currentPos = -480;
        // Reset the element
        deer2.style.bottom = 0+"px";
        deer2.style.top = "auto";
        var motionInterval2 = setInterval(function() {
          currentPos += speed;
          if (currentPos >= -450 && speed >= 0) {
           currentPos = -450;
           speed = -1 * speed;
         }
        if (currentPos <= -550 && speed < 0) {
          currentPos = -550;
          speed = -1 * speed;
         }

        deer2.style.bottom = currentPos+"px";
      });
      }
      move1()
      move2()
    })
  }

  function mouseClick(){
    var deer = document.getElementsByClassName("deer");
    points = 0
    document.getElementById("game-screen").style.cursor = "crosshair";
    for (var i = 0; i < deer.length; i++) {
      var deers = deer[i]
      deers.addEventListener("click", function(event){
        console.log("it works");
        points += 10;
        document.getElementById("points").innerHTML = points;
        event.target.style.visibility = "hidden";
        var reappear = setInterval(function(){
          event.target.style.visibility = "visible";
        }, 1000);
      })
    }
  }

  function countDown(){
    var button = document.getElementById("start")
    button.addEventListener("click", function(){
      var timeleft = 30;
      var timer = setInterval(function(){
        if (timeleft >= 1){
          document.getElementById("time").innerHTML = timeleft - 1;
        }
        timeleft -= 1;
        if(timeleft == 0){
          console.log("3 sec up");
          var endGame = document.getElementById("game-screen");
          endGame.innerHTML = "Time is Up Your Score is " + points;
          endGame.style.color = "red";
          endGame.style.fontSize = "90px";
          var res = document.getElementsByClassName("again")[0];
          res.className = "col-lg-6 col-md-6 text-center again";
          document.getElementsByClassName("menu")[0].className = "hidden-lg hidden-md hidden-sm"
          document.getElementById("reset").addEventListener("click", function(){
            location.reload()
          })
        };
      }, 1000)
    })
  }


  startGame()
  mouseClick()
  countDown()
})
