// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBVQdUJdxXnuIKMdGm4AXEvjGfFVxDmv8g",
      authDomain: "kwitter-fa898.firebaseapp.com",
      databaseURL: "https://kwitter-fa898-default-rtdb.firebaseio.com",
      projectId: "kwitter-fa898",
      storageBucket: "kwitter-fa898.appspot.com",
      messagingSenderId: "793160410076",
      appId: "1:793160410076:web:ed508ee2acc033540b6519"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
 });

 document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
user_name = message_data["name"];
message=message_data["message"];
like=message_data["like"];
name_with_tag="<h4>"+ user_name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+"value"+like+"onclick='updatelike(this.id)'>"
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

      } });  }); }
getData();

function updateLike(firebase_message_id){
console.log("clicked on like button-"+firebase_message_id);
button_id=firebase_message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
console.log(updated_likes);

firebase.database().ref(room_name).child(firebase_message_id).update({
      like:updated_likes
});
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}