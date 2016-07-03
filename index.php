<html>
  <head>
     <title> Let's do this </title>
   </head>
   <body> America
     <?php
        echo "Testing php ";
        $var = 1;
        while($var < 6){
          echo $var;
          echo "<br>";
          $var+=1;
        }
        echo "Hi Daylon and Jocelyn!";
      ?>

      <script>
        console.log("Testing javascript");
        var hello = "world";
        console.log(hello);
      </script>


      <img id="animation" width="220" height="277"
      src="animation.png" hidden>


      <canvas id="myCanvas" width="320" height="320"
      style="border:1px solid #d3d3d3;" onmousedown = "mouseDown()" onmouseup="mouseUp()">
      Your browser does not support the HTML5 canvas tag.
      </canvas>

      <script>

      var xpos = 0;
      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      var img = document.getElementById("animation");

      ctx.drawImage(img, xpos, 0, 320, 320, 0, 0, 320, 320);

      var mouseDown = function() {
        xpos+=320;
        if(xpos>320*6)
          xpos = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, xpos, 0, 320, 320, 0, 0, 320, 320);

      }

      var mouseUp = function() {
      //do something
      }
      </script>

   </body>
</html>
