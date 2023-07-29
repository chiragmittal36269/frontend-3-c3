const fName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const continues = document.getElementById("continue");
const mandatory = document.getElementById("mandatory");
let token = (Math.random() + 1).toString(36).substring(7);

function onClick(event) {
	mandatory.style.visibility = "hidden";
	// console.log("hello");
}

function checkIfUserExists(email) {
	let users = JSON.parse(localStorage.getItem("users"));
	const obj = users.find((userObj) => {
		return userObj.email === email;
	});
	if (obj) {
		return true;
	} else {
		return false;
	}
}

function saveUser(fNameInput, emailInput, passwordInput, tokenInput) {
	let usersObj = {
		fName: fNameInput,
		email: emailInput,
		password: passwordInput,
		token: tokenInput,
	};

	let users = JSON.parse(localStorage.getItem("users"));
	if (users === null) {
		users = [];
	}
	users.push(usersObj);
	localStorage.setItem("users", JSON.stringify(users));

	sessionStorage.setItem("LoggedInUser", JSON.stringify(usersObj));
	fName.value = "";
	email.value = "";
	password.value = "";
	confirmPassword.value = "";
	alert("signup successful");
	window.location.href = "./profile";
}

continues.addEventListener("click", (event) => {
	event.preventDefault();
	if (
		fName.value.trim() === "" ||
		email.value.trim() === "" ||
		password.value.trim() === "" ||
		confirmPassword.value.trim() === ""
	) {
		mandatory.style.visibility = "visible";
	} else {
		if (password.value.trim() != confirmPassword.value.trim()) {
			alert("password is not matched");
			password.value = "";
			confirmPassword.value = "";
		} else {
			if (localStorage.getItem("users")) {
				if (checkIfUserExists(email.value)) {
				} else {
					saveUser(fName.value, email.value, password.value, token);
				}
			} else {
				saveUser(fName.value, email.value, password.value, token);
			}
		}
	}
});
