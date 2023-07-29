const fName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const token = document.getElementById("token");

const user = JSON.parse(sessionStorage.getItem("LoggedInUser"));
// console.log(user);

fName.value = user.fName;
email.value = user.email;
password.value = user.password;
token.value = user.token;
