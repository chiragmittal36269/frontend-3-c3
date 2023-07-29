const fName = document.getElementById("fName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const token = document.getElementById("token");
const logout = document.getElementById("logout");
// console.log(fName, email, password, token);

const user = JSON.parse(sessionStorage.getItem("LoggedInUser"));
// console.log(user);

fName.innerText = user.fName;
email.innerText = user.email;
password.innerText = user.password;
token.innerText = user.token;

logout.addEventListener("click", (event) => {
	window.location.href = "../index.html";
	let arr = JSON.parse(localStorage.getItem("users"));
	let deleteObj = arr.find((usersObj) => {
		return usersObj.email === user.email;
	});

	let index = arr.indexOf(deleteObj);
	arr.splice(index, 1);
	localStorage.setItem("users", JSON.stringify(arr));
});
