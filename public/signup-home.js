const auth = firebase.auth();

function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
}

function signIn(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
}

    function signOut(){
        auth.signOut();
        if(window.location.pathname != "/signup.html"){
            window.location.href = "/signup.html";
        }
    }

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
        }

        else{
            var div = document.getElementById('user');
            div.innerHTML = "";
            div.innerHTML += "<a href='/signup.html'><i class='fas fa-user'></i><span> Login</span></a>";
        }
    });