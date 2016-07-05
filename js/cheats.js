$("#submit").click(function() {
  var userInput = $("#inputtext").val();
  $.ajax({
    url:  'http://daylon-and-jocelyn.herokuapp.com/secret.php',
    type: 'POST',
    data: {inputtext: userInput},
    success: function(response) {
      switch(response){
        case "speed":
          speed+=1;
          $('#result').html("Speed activated");
          break;
        default:
          $('#result').html("Cheat Failed");
        break;
      }
    }
  });
});
