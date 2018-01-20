$(document).ready(function() {
	  // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAAHDR8xsv0bqaZ1p_1pCQduDtwE4BFWPM",
      authDomain: "train-scheduler-6a152.firebaseapp.com",
      databaseURL: "https://train-scheduler-6a152.firebaseio.com",
      projectId: "train-scheduler-6a152",
      storageBucket: "",
      messagingSenderId: "642288717061"
    };
    firebase.initializeApp(config);

  var database = firebase.database();

  // 2. Button for adding trains
  $("#submit-player").on("click", function(event) {
    event.preventDefault();

    // Grabs user input
    var playerName = $("#player-name").val().trim();

    // Creates local "temporary" object for holding train data
    var newPlayer = {
      name: playerName,
    };

    // Uploads employee data to the database
    database.ref().push(newPlayer);

    // Logs everything to console
    console.log(newPlayer.name);

    // Clears all of the text-boxes
    $("#player-name").val("");
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