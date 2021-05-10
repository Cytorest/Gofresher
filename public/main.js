var firebaseConfig = {
    apiKey: "AIzaSyCipbZc8ygyrVuZH3DE5LP-LfIZeXTJCz8",
    authDomain: "purpletree-59d5e.firebaseapp.com",
    databaseURL: "https://purpletree-59d5e-default-rtdb.firebaseio.com",
    projectId: "purpletree-59d5e",
    storageBucket: "purpletree-59d5e.appspot.com",
    messagingSenderId: "1089567153704",
    appId: "1:1089567153704:web:9fca5f3556c6c11c8a5f1d",
    measurementId: "G-3X64N3ZYZ7"
};

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();  
  
  var messagesRef = firebase.database().ref('messages');
  
document.getElementById("contactForm").addEventListener("submit",submitForm);
  
function submitForm(e){
  e.preventDefault();
  var name= getInputVal('name');
  var email= getInputVal('email');
  var message= getInputVal('message');
  saveMessage(name,email,message);
  console.log(name, email, message);
  document.getElementById('contactForm').reset();
  setTimeout(function(){ $('.successful-message').fadeIn();},1000);
  setTimeout(function(){ $('.successful-message').fadeOut();},5000);
}

  function getInputVal(id){
    return document.getElementById(id).value;
  }

  function saveMessage(name,email,message){
   var newMessageRef = messagesRef.push();
   newMessageRef.set({
     name: name,
     email: email,
     message: message
   })
  }