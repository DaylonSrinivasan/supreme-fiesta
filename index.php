<!DOCTYPE html>
<html>
<body>
  <!-- dependencies -->

  <!--ajax-->
<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>


  <img id="animation" width="320" height="320"
  src="animation.png" hidden>


  <canvas id="myCanvas" width="800" height="800"
  style="border:1px solid #d3d3d3;">
  Your browser does not support the HTML5 canvas tag.
  </canvas>

  <!-- game logic -->
  <script type="text/javascript" src="game.js"></script>

  <br>

  <input type="text" Placeholder = "Enter Cheat Here" id="inputtext" >
  <button id="submit"> Submit </button>
  <br>
  <p id="result"></p>

  <script>
    $("#submit").click(function() {
      var userInput = $("#inputtext").val();
      $.ajax({
        url:  'secret.php',
        type: 'POST',
        data: {inputtext: userInput},
        success: function(response) {
          console.log(response);
          $('#result').html(response);
        }
      });
    });
  </script>

</body>
</html>
