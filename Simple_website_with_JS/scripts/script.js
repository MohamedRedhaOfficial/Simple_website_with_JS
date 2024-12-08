var emailArray=[];
var passwordArray=[];

function register(){

    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;

    if(email == "" || password == ""){
        alert("Fill in empty fields");
        return;
    }
    else if(emailArray.indexOf(email) == -1){
        emailArray.push(email);
        passwordArray.push(password);
        alert(email + " Thank you for registration");

        document.getElementById("re").value = "";
        document.getElementById("rp").value = "";
    }
    else{
        alert(email + " is already registered.");
        return;
    }
};

function login(){

    var email = document.getElementById('se').value;
    var password = document.getElementById('sp').value;

    var i = emailArray.indexOf(email);

    if(emailArray.indexOf(email) == -1){
        if(email == ""){
            alert("Email required.");
            return;
        }
        alert("Email does not exist.");
        return;
    }
    else if(passwordArray[i] != password){
        if(password == ""){
            alert("Password required.");
            return;
        }
        alert("Incorrect Password.");
        return;
    }
    else{
        alert("you are logged in!");
        location.href = "home.html";
        //location.replace
        return;
    }
}

function forgot(){

    var email = document.getElementById('fe').value;

    if(emailArray.indexOf(email) == -1){
        if(email == ""){
            alert("Email required.");
            return;
        }
        alert("Email does not exist???");
        return;
    }
    alert("email is sent to your email. \n Thank you!");
    document.getElementById('fe').value="";
}




var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");
var forgetBox = document.getElementById("forgot");

var loginTab = document.getElementById("lt");
var regTab = document.getElementById("rt");

function regTabFun(){

    regBox.style.visibility="visible";
    loginBox.style.visibility="hidden";
    forgetBox.style.visibility="hidden";

    regTab.style.backgroundColor="rgb(12, 132, 189)";
    loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";

    document.getElementById('se').value = "";
    document.getElementById('sp').value = "";
    document.getElementById('fe').value = "";
}
function loginTabFun(){

    regBox.style.visibility="hidden";
    loginBox.style.visibility="visible";
    forgetBox.style.visibility="hidden";

    loginTab.style.backgroundColor="rgb(12, 132, 189)";
    regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";

    document.getElementById("re").value = "";
    document.getElementById("rp").value = "";
    document.getElementById('fe').value = "";
}
function forTabFun(){

    regBox.style.visibility="hidden";
    loginBox.style.visibility="hidden";
    forgetBox.style.visibility="visible";

    regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
    loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";

    document.getElementById("re").value = "";
    document.getElementById("rp").value = "";
    document.getElementById('se').value = "";
    document.getElementById('sp').value = "";
}