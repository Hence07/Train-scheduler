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

        var name = $("#train-name-input").val().trim();
        var destination = $("#dest-input").val().trim();
        var train = $("#firstTrain-input").val().trim();
        var frequency = $("#freq-input").val().trim();

        // Code for the push
        dataRef.ref().push({

            name: name,
            dest: destination,
            train: train,
            frequency: frequency,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });


});