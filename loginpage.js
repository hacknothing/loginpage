

function revealBlock()
{
    document.getElementById("content").style.display="none";
    document.getElementById("login-main").style.display="none";
    document.getElementById("signup-main").style.display="block";
    document.getElementById("content-login").style.display="block";
}

function revealBlockLogin()
{
    document.getElementById("content").style.display="block";
    document.getElementById("login-main").style.display="block";
    document.getElementById("signup-main").style.display="none";
    document.getElementById("content-login").style.display="none";
}

var user = {

};

function getUserData()
{
    var name=document.getElementById("sigup-username").value;
    var email=document.getElementById("email").value;
    var pwd=document.getElementById("signup-password").value;

    user.username=name;
    user.useremail=email;
    user.password=pwd;
    
    localStorage.setItem(name,JSON.stringify(user))
}


function checkUserData()
{
    alert("hello")
    var loginname=document.getElementById("login-username").value;
    var loginpwd=document.getElementById("login-password").value;
    if(localStorage.getItem(loginname))
    {
       return true;
    }
    else{
        return false;
    }

}

