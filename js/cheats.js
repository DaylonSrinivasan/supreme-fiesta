$("#submit").click(function() {
  var userInput = $("#inputtext").val();
  $.ajax({
    url:  'https://daylon-and-jocelyn.herokuapp.com/secret.php',
    type: 'POST',
    data: {inputtext: userInput},
    success: function(response) {
      console.log($(response).text().trim());
      switch($(response).text().trim()){
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
