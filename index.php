<!DOCTYPE html>
<html>

<head>

    <!-- Font -->
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Montserrat">

  <!-- Styles -->
    <link href="./style.css" rel="stylesheet" media="screen">

</head>

<body>
  <!-- dependencies -->

  <!--angular and jquery-->
<script type="text/javascript" src="https://code.jquery.com/jquery-3.0.0.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>

<div ng-app="app">


  <img id="animation" width="1280" height="320" src="images/fish_char.png" hidden>
  <img id="fishheart" width="1280" height="320" src="images/fishheart.png" hidden>
  <img id="octopus" width="215" height="282" src="images/octopus.png" hidden>
  <img id="enemyfish" width="150" height="256" src="images/enemyfish.png" hidden>
  <img id="bubble" width="32" height="32" src="images/bubble.png" hidden>
  <img id="background" src="images/background2.jpg" hidden>

  <h1>A FISHY GAME</h1>

  <canvas id="myCanvas" style="width:100%" width="1000" height = "350">
  style="border:1px solid #d3d3d3;">
  Your browser does not support the HTML5 canvas tag.
  </canvas>

  <br>

  <div>
    <p style="float: left; width: 50%" id="score"></p>
    <p style="float: right; width: 50%" id="lives"></p>
  </div>

  <div>
    <input style="float: left; width:80%" type="text" Placeholder = "Enter Cheat Here" id="inputtext" >
    <button style="float: right; width:15%" id="submit"> Submit </button>
  </div>
  <br>
  <div>
    <p style="float: center" id="result"></p>
  </div>

  <div>
  <p>Made by Daylon Srinivasan and Jocelyn Tran. See our code on <a href="https://github.com/DaylonSrinivasan/supreme-fiesta" target="_blank" style="text-decoration: underline;">GitHub.</a></p>
  </div>

  <!-- include javascript files -->
  <script type="text/javascript" src="js/values.js"></script>
  <script type="text/javascript" src="js/game.js"></script>
  <script type="text/javascript" src="js/cheats.js"></script>

</body>
</html>
