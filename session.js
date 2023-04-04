

function checkLogin() {

    var isLogin = sessionStorage.getItem("isLogin");

    var user = sessionStorage.getItem("user");
    user = user.split(",");

    var username = user[0];

    if (isLogin == "true") {

        document.getElementById("butondiv").style.display = "none";
        document.getElementById("header_sag").innerHTML = username;
        document.getElementById("logout_Btn").style.display = "block";
    }

}

function logout() {

    var isLogin = sessionStorage.getItem("isLogin");

    isLogin = false;

    sessionStorage.setItem("isLogin", isLogin);
    document.getElementById("logout_Btn").style.display = "none";
    window.location = "index.html";


}

function login(){

    var isLogin = sessionStorage.getItem("isLogin");

    if (isLogin == "true") {

        window.location = "apply.html";
    }
    else{
        window.location = "login.html";
    }
}













