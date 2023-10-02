var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

