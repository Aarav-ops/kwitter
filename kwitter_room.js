

const firebaseConfig = {
      apiKey: "AIzaSyBVQdUJdxXnuIKMdGm4AXEvjGfFVxDmv8g",
      authDomain: "kwitter-fa898.firebaseapp.com",
      projectId: "kwitter-fa898",
      storageBucket: "kwitter-fa898.appspot.com",
      messagingSenderId: "793160410076",
      appId: "1:793160410076:web:ed508ee2acc033540b6519"
    };
    
    
    const app = initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location="kwitter_page.html";
    }

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("Room Name - " + Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";  

      document.getElementById("output").innerHTML + =row;
      });});}
getData();
