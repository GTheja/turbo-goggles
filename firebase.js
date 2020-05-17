var app_fireBase = {};
(function(){
        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyCscnvCL_KqvzH6pIhZsz6k_eFKYZCZbbE",
            authDomain: "sosossss.firebaseapp.com",
            databaseURL: "https://sosossss.firebaseio.com",
            projectId: "sosossss",
            storageBucket: "sosossss.appspot.com",
            messagingSenderId: "128084382964",
            appId: "1:128084382964:web:fc4eded83311d7faf23aa1",
            measurementId: "G-0ZEHNYMV9V"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
    app_fireBase = firebase;

    var database = firebase.database().ref().child('profile');
    document.getElementById('displaform').addEventListener('submit', submitForm);


    function submitForm(e) {
        e.preventDefault();

        var name = getInputVal('name');
        var Qualification = getInputVal('Qualification');
        var unifield = getInputVal('unifield');

        saveForm(name, Qualification, unifield);
    }

    function getInputVal(id){
        return document.getElementById(id).value;

    }

    function saveForm(name, Qualification, unifield){
        var newdata = database.push();

        newdata.set({
            name: name,
            Qualification: Qualification,
            unifield: unifield,
        });

    }

    database.on("child_added", function (data, prevChildKey) {
        var newPlayer = data.val();
        console.log("name: " + newPlayer.name);
        console.log("Qualification: " + newPlayer.Qualification);
        console.log("unifield: " + newPlayer.unifield);
        console.log("Previous Player: " + prevChildKey);
    });


  


        
})()
