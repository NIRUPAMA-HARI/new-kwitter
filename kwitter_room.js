
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyA1dQsIVTdd27MoUaWE0kEQAnwAJVdGolE",
  authDomain: "food-delivery-app-6571d.firebaseapp.com",
  databaseURL: "https://food-delivery-app-6571d-default-rtdb.firebaseio.com",
  projectId: "food-delivery-app-6571d",
  storageBucket: "food-delivery-app-6571d.appspot.com",
  messagingSenderId: "163028251508",
  appId: "1:163028251508:web:3ca38450b31b35e2e5f221",

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}