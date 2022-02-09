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

    const auth = firebase.auth();

    function signUp(){

        var email = document.getElementById("email");
        var password = document.getElementById("password");

        const promise = auth.createUserWithEmailAndPassword(email.value, password.value);

        promise.catch(function(e){
            console.log(e.message); 
            if(e.message == "The password must be 6 characters long or more.")
            {
                document.getElementById('email-message').innerHTML = "Empty Password. The password must be 6 characters long or more.";
                document.getElementById('email-message').style.color = "#ff0000";
                errorM = e.message;
                window.setTimeout(function(){document.getElementById('email-message').style.color = "transparent";},3000);
            }
            else if(e.message == "Password should be at least 6 characters"){
                document.getElementById('email-message').innerHTML = "Password should be at least 6 characters";
                document.getElementById('email-message').style.color = "#ff0000";
                errorM = e.message;
                window.setTimeout(function(){document.getElementById('email-message').style.color = "transparent";},3000);
            }
            else if(e.message == "The email address is already in use by another account.")
            {
                document.getElementById('email-message').innerHTML = "The email address is already in use by another account.";
                document.getElementById('email-message').style.color = "#ff0000";
                errorM = e.message;
                window.setTimeout(function(){document.getElementById('email-message').style.color = "transparent";},3000);
            }
        });

        // alert ("Signed Up");

        // window.location.href = "/index.html";
    }

    function signIn(){
        var email = document.getElementById("email1");
        var password = document.getElementById("password1");
        let errorM;
        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(function(e){
            console.log(e.message); 
            if(e.message == "The email address is badly formatted.")
            {
                document.getElementById('email-message1').innerHTML = "Please enter a valid email address";
                document.getElementById('email-message1').style.color = "#ff0000";
                errorM = e.message;
                window.setTimeout(function(){document.getElementById('email-message1').style.color = "transparent";},3000);
            }
            else if(e.message == "The password is invalid or the user does not have a password.")
            {
                document.getElementById('email-message1').innerHTML = "Password blank or does not match email record";
                document.getElementById('email-message1').style.color = "#ff0000";
                errorM = e.message;
                window.setTimeout(function(){document.getElementById('email-message1').style.color = "transparent";},3000);
            }
            else if(e.message == "There is no user record corresponding to this identifier. The user may have been deleted.")
            {
                document.getElementById('email-message1').innerHTML = "Invalid email and password combination or The user may have been deleted";
                document.getElementById('email-message1').style.color = "#ff0000";
                errorM = e.message;
                window.setTimeout(function(){document.getElementById('email-message1').style.color = "transparent";},3000);
            }
        });
    }

    function signOut(){
        auth.signOut();
        window.location.href = "/signup.html";
    }

    auth.onAuthStateChanged(function(user){

        if(user){
            document.getElementById('signIn').style.width = "176px";
            document.getElementById('signIn').style.boxShadow = "none";
            var div = document.getElementById('signIn');
            div.innerHTML = "";
            div.innerHTML += "Logging You In <img src='https://i.gifer.com/ZZ5H.gif' style='width:25px'>";
            window.location.href = "/index.html";

            document.getElementById('signUp').style.width = "228px";
            document.getElementById('signUp').style.boxShadow = "none";
            var div1 = document.getElementById('signUp');
            div1.innerHTML = "";
            div1.innerHTML += "Creating An Account <img src='https://i.gifer.com/ZZ5H.gif' style='width:25px'>";
            window.location.href = "/index.html";

        }

        else{
            if(window.location.pathname != "/signup.html"){
                window.location.href = "/signup.html";
            }
        }

    });

    $(document).on('click', '.signin', function(){
        $(".bottom").show();
        $(".two").show();
        $(".middle").hide();
        $(".one").hide();
        $("#message-text").html("Login To The Site");
    });

    $(document).on('click', '.signup', function(){
        $(".middle").show();
        $(".one").show();
        $(".bottom").hide();
        $(".two").hide();
        $("#message-text").html("Create An Account");
    });