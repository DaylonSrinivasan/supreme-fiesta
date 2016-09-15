<!DOCTYPE html>
<html lang=en>

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

  <!-- Font -->
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Montserrat">

  <!-- Styles -->
  <link href="./style.css" rel="stylesheet" media="screen">

</head>

<body>

  <div class="container">
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

      <h1 style="display:inline-block; padding-right: 20px">A FISHY GAME</h1>
      <p style="display:inline-block">Controls: wasd to move, e to shoot bubbles, p to pause</p>

      <canvas id="myCanvas" style="width:100%" width="1000" height = "350">
        style="border:1px solid #d3d3d3;">
        Your browser does not support the HTML5 canvas tag.
      </canvas>

      <form class="form-inline">
        <div class="form-group">
          <h4 id="score" style="padding:0px 150px 0px 0px"></h4>
        </div>
        <div class="form-group">
          <h4 id="lives" style="padding:0px 150px 0px 0px"></h4>
        </div>

        <div class="form-group">
          <input placeholder="Enter Cheat Here" id="inputtext">
          <button id="submit"> Submit </button>
        </div>
        <div class="form-group">
          <h4 style="float: center" id="result"></h4>
        </div>
      </form>

      <div>
      <p>Made by Daylon Srinivasan and Jocelyn Tran. See our code on <a href="https://github.com/DaylonSrinivasan/supreme-fiesta" target="_blank" style="text-decoration: underline; color: #252E30;">GitHub.</a></p>
      </div>

      <!-- include javascript files -->
      <script type="text/javascript" src="js/values.js"></script>
      <script type="text/javascript" src="js/game.js"></script>
      <script type="text/javascript" src="js/cheats.js"></script>
    </div>
  </body>
  </html>
