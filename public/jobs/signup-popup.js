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
        else if(e.message == "The email address is badly formatted."){
            document.getElementById('email-message').innerHTML = "Please enter a valid email address.";
            document.getElementById('email-message').style.color = "#ff0000";
            errorM = e.message;
            window.setTimeout(function(){document.getElementById('email-message').style.color = "transparent";},3000);           
        }
    });
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
            document.getElementById('email-message1').innerHTML = "Please enter a valid email address.";
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
    if(window.location.pathname != "/signup.html"){
        window.location.href = "/signup.html";
    }

}

var counter = 0;

auth.onAuthStateChanged(function(user){

    if(user){
        var email = user.email;
        var name   = email.substring(0, email.lastIndexOf("@"));
        var domain = email.substring(email.lastIndexOf("@") +1);
        var div = document.getElementById('user');
        div.innerHTML += "<i class='fas fa-user'></i> welcome <span class='username' id='username'></span>" + name + "<span> </span><i class='fas fa-chevron-circle-down' id='menuArrow'></i><div id='myDropdown' class='dropdown-content'><li><button onclick='signOut()' id='signOut' class='signOut'> Sign Out </button></li></div>";
        $(document).on('click', '#user', function(){
            $('#myDropdown').toggle();
            $("#menuArrow").toggleClass("rotated");
        });
        console.log(user.email);
        document.getElementById('signUp').style.width = "228px";
        document.getElementById('signUp').style.boxShadow = "none";
        var div1 = document.getElementById('signUp');
        div1.innerHTML = "";
        div1.innerHTML += "Creating An Account <img src='https://i.gifer.com/ZZ5H.gif' style='width:25px'>";

        auth.onAuthStateChanged(function(user){
            var email = user.email;
            console.log(user.email);
            counter = 1;
            if(user.email){
                $(".background-gradient").hide();
                $(".central-popup").hide();
                $(".close").hide();
                $(".login-button-top").hide();
                $(".read-full-article").html("Read Full Article");
            }
        });

        document.getElementById('signIn').style.width = "176px";
        document.getElementById('signIn').style.boxShadow = "none";
        var div = document.getElementById('signIn');
        div.innerHTML = "";
        div.innerHTML += "Logging You In <img src='https://i.gifer.com/ZZ5H.gif' style='width:25px'>";
    }

    else{
        var div = document.getElementById('user');
        div.innerHTML = "";
        div.innerHTML += "<span class='login-button-top'><i class='fas fa-user'></i><span> Login</span></span>";
        $(".read-full-article").html("Login To Apply");
    }
    $(document).on('click', '.login-button-top', function(){
        if(user){
            document.getElementsByClassName("read-full-article")[0].style.display="none";
            document.getElementsByClassName("bottom-gradient")[0].style.display="none";
            document.getElementsByClassName("content")[0].style.height="auto";
            document.getElementsByClassName("content")[0].style.backgroundColor="#fffeef";
        }      
        else{
            if(counter==0)
            {
            console.log("Login To Apply");
            $(".background-gradient").show();
            $(".central-popup").show();
            $(".close").show();
            }
        }
        });
});

    $(".close").click(function () {
    $(".background-gradient").hide();
    $(".central-popup").hide();
    $(".close").hide();
    });

    $(document).on('click', '.signin', function(){
        $(".bottom").show();
        $(".two-message").show();
        $(".middle").hide();
        $(".one-message").hide();
        $("#message-text").html("Login To The Site");
    });

    $(document).on('click', '.signup', function(){
        $(".middle").show();
        $(".one-message").show();
        $(".bottom").hide();
        $(".two-message").hide();
        $("#message-text").html("Create An Account");
    });