
// signUP
let signname = document.getElementById("signname");
let signemail = document.getElementById("signemail");
let signpass = document.getElementById("signpass");
// logIn
let logemail = document.getElementById("logemail");
let logpass = document.getElementById("logpass");
// 
let exist = document.getElementById("exist");

if (localStorage.getItem("users") == null) {
  signUpArray = [];
} else {
  signUpArray = JSON.parse(localStorage.getItem("users"));
}

function signUp() {
  if (signname.value == "" || signemail.value == "" || signpass.value == "") {
    exist.innerHTML =
      "<span class='text-danger my-3'>All inputs are required</span>";
    return false;
  }
  for (var i = 0; i < signUpArray.length; i++) {
    if (signUpArray[i].email.toLowerCase() == signemail.value.toLowerCase()) {
      exist.innerHTML =
        "<span class='text-success my-3'>Email already exists</span>";
      return false;
    }
  }
  signObj = {
    name: signname.value,
    email: signemail.value,
    pass: signpass.value,
  };
  signUpArray.push(signObj);
  localStorage.setItem("users", JSON.stringify(signUpArray));
  exist.innerHTML = "<span class='text-success my-3'>Success</span>";
  location.href = "../index.html";
}

function logIn() {
  if (logemail.value == "" || logpass.value == "") {
    exist.innerHTML = "<span class='text-danger my-3'>All inputs are required</span>";
    return false;
  }
  for (var i = 0; i < signUpArray.length; i++) {
    if (signUpArray[i].email.toLowerCase() == logemail.value.toLowerCase() && signUpArray[i].pass == logpass.value) {
      location.href = "area/home.html";
    } else {
      exist.innerHTML = "<span class='text-danger my-3'>Incorrect email or password</span>";
    }
  }
}
