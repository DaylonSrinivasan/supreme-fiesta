<!DOCTYPE html>
<html>
<body>
  <!-- dependencies -->

  <!--ajax-->
<script type="text/javascript" src="https://code.jquery.com/jquery-3.0.0.min.js"></script>


  <img id="animation" width="320" height="320" src="images/fishy.png" hidden>
  <img id="fishheart" width="320" height="320" src="images/fishheart.png" hidden>
  <img id="octopus" width="215" height="282" src="images/octopus.png" hidden>
  <img id="enemyfish" width="150" height="256" src="images/enemyfish.png" hidden>
  <img id="bubble" width="32" height="32" src="images/bubble.png" hidden>    
  <img id="background" src="images/background2.jpg" hidden>



  <canvas id="myCanvas" width="1000" height="400"
  style="border:1px solid #d3d3d3;">
  Your browser does not support the HTML5 canvas tag.
  </canvas>

  <br>

  <div id="score"></div>

  <input type="text" Placeholder = "Enter Cheat Here" id="inputtext" >
  <button id="submit"> Submit </button>
  <br>
  <p id="result"></p>

  <!-- include javascript files -->
  <script type="text/javascript" src="js/values.js"></script>
  <script type="text/javascript" src="js/game.js"></script>
  <script type="text/javascript" src="js/cheats.js"></script>

</body>
</html>
