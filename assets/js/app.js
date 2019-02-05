$(document).ready(function(){
    //Initialize Firebase
    var config = {
        apiKey: "AIzaSyD2qxtt3hT8keatj9rBNzt11vxRpFJgtjA",
        authDomain: "train-scheduler-a3cef.firebaseapp.com",
        databaseURL: "https://train-scheduler-a3cef.firebaseio.com",
        projectId: "train-scheduler-a3cef",
        storageBucket: "train-scheduler-a3cef.appspot.com",
        messagingSenderId: "765696189083"
    };
    firebase.initializeApp(config);

    var dataRef = firebase.database();
    // Creating a Jquery function with .on argument and another callback func.
    $("#add-train-btn").on("click", function (event) {
        event.preventDefault();

 // grabs user inputs

        var trName = $("#train-name-input").val().trim();
        var trDest = $("#dest-input").val().trim();
        var trStart = $("#firstTrain-input").val().trim();
        var trFreq = $("#freq-input").val().trim();

        // Creates local "temporary" object for holding employee data
        var newTrain = {
            name: trName,
            destination: trDest,
            start: trStart,
            frequency: trFreq,
        };

        // Uploads train data to the database
        //alert("Train successfully added");

        database.ref().push(newTrain);


        // Alert
        alert("Train successfully added");

        // Clears all of the text-boxes
        $("#train-name-input").val("");
        $("#dest-input").val("");
        $("#firstTrain-input").val("");
        $("#freq-input").val("");
    });

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
    database.ref().on("child_added", function (childSnapshot) {
        console.log(childSnapshot.val());

        // Store everything into a variable.
        var trName= childSnapshot.val().name;
        var trDest= childSnapshot.val().destination;
        var trStart = childSnapshot.val().start;
        var trFreq= childSnapshot.val().frequency;

        // data Info
        console.log(trName);
        console.log(trDest);
        console.log(trStart);
        console.log(trFreq);

        // declare some variables to handle tim,e format and conversion
        //Use moment.js  to calculate minutes or time until next train arrival
        //A dding each train data into table
    });
});