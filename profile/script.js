const fName = document.getElementById("fName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const token = document.getElementById("token");
// console.log(fName, email, password, token);

const user = JSON.parse(sessionStorage.getItem("LoggedInUser"));
// console.log(user);

fName.innerText = user.fName;
email.innerText = user.email;
password.innerText = user.password;
token.innerText = user.token;
