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
        // var speed = 1;
        // Reset the element
        // deer1.style.bottom = 0+"px";
        // deer1.style.top = "auto";
        var currentPos = -440;
        var upInterval1 = setInterval(up, 5);
        function up(){
          // currentPos += 1;

          if (currentPos < -340) {
            // currentPos = -340;
            currentPos++
          } else {
            clearInterval(upInterval1);
          }


        deer1.style.bottom = currentPos+"px";
        // setTimeout(function(){deer1.style.visibility = "hidden"}, 2000)
      };
      // var downInterval1 = setInterval(down, 2);
      // function down(){
      //   if (currentPos > -440) {
      //     currentPos --
      //   }
      //   else{
      //     clearInterval(downInterval1)
      //   }
      // }
      // deer1.style.bottom = currentPos+"px";
      var disInterval = setInterval(function(){
      if(deer1.style.visibility = "visible"){

        setTimeout(function(){ deer1.style.visibility = "hidden"; });
      }
    },4000)

        var reappear = setInterval(function(){
          deer1.style.visibility = "visible";
        },(Math.random() * 7000) + 3000);

        // clearInterval()
      // })
    //   if(deer1.style.visibility = "hidden"){
    //   setTimeout(function(){ deer1.style.visibility = "visible"; }, 1000);
    // }

      }
      function move2() {
        var deer2 = document.getElementById("deer2");
        var bush2 = document.getElementById("bush2");

        bush2.className = "col-lg-1 col-md-1 col-sm-1 bush";
        deer2.className = "col-lg-1 col-md-1 col-sm-1 deer";

        var currentPos = -480;
        var upInterval1 = setInterval(up, 5);
        function up(){

          if (currentPos < -450) {
            currentPos++
          } else {
            clearInterval(upInterval1);
          }
          deer2.style.bottom = currentPos+"px";
        };
        var disInterval = setInterval(function(){
          if(deer2.style.visibility = "visible"){
            setTimeout(function(){ deer2.style.visibility = "hidden"; });
          }
        },(Math.random() * 3000) + 1000)

        var reappear = setInterval(function(){
          deer2.style.visibility = "visible";
        },(Math.random() * 7000) + 3000);
      }


      function move3() {
        var deer3 = document.getElementById("deer3");
        var bush3 = document.getElementById("bush3");

        bush3.className = "col-lg-1 col-md-1 col-sm-1 bush";
        deer3.className = "col-lg-1 col-md-1 col-sm-1 deer";
        var currentPos = -440;
        var upInterval1 = setInterval(up, 5);
        function up(){
          if (currentPos < -380) {
            currentPos++
          } else {
            clearInterval(upInterval1);
          }
        deer3.style.bottom = currentPos+"px";
        };
        var disInterval = setInterval(function(){
          if(deer3.style.visibility = "visible"){
            setTimeout(function(){ deer3.style.visibility = "hidden"; });
          }
        },(Math.random() * 3000) + 1000)
        var reappear = setInterval(function(){
          deer3.style.visibility = "visible";
        },(Math.random() * 7000) + 3000);
      }
      function move4() {
        var deer4 = document.getElementById("deer4");
        var bush4 = document.getElementById("bush4");

        bush4.className = "col-lg-1 col-md-1 col-sm-1 bush";
        deer4.className = "col-lg-1 col-md-1 col-sm-1 deer";
        var currentPos = -270;
        var upInterval1 = setInterval(up, 5);
        function up(){

          if (currentPos < -200) {
            currentPos++
          } else {
            clearInterval(upInterval1);
          }
        deer4.style.bottom = currentPos+"px";
        };
        var disInterval = setInterval(function(){
          if(deer4.style.visibility = "visible"){
          setTimeout(function(){ deer4.style.visibility = "hidden"; });
          }
        },(Math.random() * 3000) + 1000)

        var reappear = setInterval(function(){
          deer4.style.visibility = "visible";
        },(Math.random() * 7000) + 3000);
      }
      move1()
      move2()
      move3()
      move4()
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
        }, (Math.random() * 10000) + 3000);
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
