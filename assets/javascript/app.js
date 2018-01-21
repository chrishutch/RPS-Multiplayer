$(document).ready(function() {
	  // Initialize Firebase
    var config = {
      apiKey: "AIzaSyA8lYZp2wKygWv5Yy5JmBPQ__LnGsbFvhM",
      authDomain: "rps-multiplayer-fbe94.firebaseapp.com",
      databaseURL: "https://rps-multiplayer-fbe94.firebaseio.com",
      projectId: "rps-multiplayer-fbe94",
      storageBucket: "",
      messagingSenderId: "441560983773"
    };
    firebase.initializeApp(config);

  var database = firebase.database();

  // Variables
  var players;
  var player1;
  var player2;
  var wins1 = 0;
  var wins2 = 0;
  var losses1 = 0;
  var losses2 = 0;
  var choice1;
  var choice2;
  var name1;
  var name2;
  var choices = ['Rock', 'Paper', 'Scissors'];
  var chosenplayer = 0;
console.log(chosenplayer);

    // 2. Button for adding trains
    $("#submit-player").on("click", function(event) {
      event.preventDefault();
if (chosenplayer == 0){
      // Grabs user input
      player1 = $("#player-name").val().trim();

      // Creates local "temporary" object for holding train data
      players = {
        name_1: player1,
        // choice: choice1,
        // wins: wins1,
        // losses: losses1
      };

      // Uploads employee data to the database
      database.ref().push(players);

      // Logs everything to console
      console.log(players);

      // Clears all of the text-boxes
      $("#player-name").val("");
      chosenplayer++;
      $('#player-1').text(player1);
      console.log(chosenplayer);
    
  }
  else if(chosenplayer == 1){

      // Grabs user input
      player2 = $("#player-name").val().trim();

      // Creates local "temporary" object for holding train data
      players = {
        name_2: player2,
        // choice: choice2,
        // wins: wins2,
        // losses: losses2
      };

      // Uploads employee data to the database
      database.ref().push(players);

      // Logs everything to console
      console.log(players);

      // Clears all of the text-boxes
      $("#player-name").val("");
      $('#player-2').text(player2);
  }
});
  // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
//   database.ref().on("child_added", function(childSnapshot, prevChildKey) {

//     console.log(childSnapshot.val());

//     // Store everything into a variable.
//     var trainName = childSnapshot.val().name;
//     var trainDestination = childSnapshot.val().destination;
//     var trainTime = childSnapshot.val().first_time;
//     var trainFrequency = childSnapshot.val().frequency;

//     // Employee Info
//     console.log(trainName);
//     console.log(trainDestination);
//     console.log(trainTime);
//     console.log(trainFrequency);

//     // Difference between the times
//     var differenceTime = moment().diff(moment(trainTime), "minutes");

//     // Time apart (remainder)
//     var remainderTime = differenceTime % trainFrequency;

//     var minutesAway = trainFrequency - remainderTime;
//     var arrival = moment().add(minutesAway, "minutes");
//     var nextArrival = moment(arrival).format("hh:mm a");
//     // Add each train's data into the table
//     $("#train-table > tbody").append('<tr><th scope="row">' + trainName + "</th><td>" + trainDestination + "</td><td>" +
//     trainFrequency + "</td><td>" + nextArrival + "</td><td>" + minutesAway + "</td></tr>");
//   });
 });
