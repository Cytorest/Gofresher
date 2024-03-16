var firebaseConfig = {
  apiKey: "AIzaSyBHD-tpwQmuzukK-Iu7r96Vzxp-eEXK1Ss",
  authDomain: "gofresher-e433c.firebaseapp.com",
  databaseURL: "https://gofresher-e433c-default-rtdb.firebaseio.com",
  projectId: "gofresher-e433c",
  storageBucket: "gofresher-e433c.appspot.com",
  messagingSenderId: "101545999274",
  appId: "1:101545999274:web:d7d043a00de94c33f5c9d3",
  measurementId: "G-5EP5C2QDES"
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