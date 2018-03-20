$(function() {

	//WHEN USER PRESSES LOGIN BUTTON
	$("#login-button").on("click", function(event) {
		event.preventDefault();
		var username = $("#username").val().trim();
		var password = $("#password").val().trim();
		if(username && password)
		{
			$.get("/api/users/"+username).then(function(response){
				if(response)
				{
					if(response.password === password)
					{
						window.location="/home/"+username+"/";
					}
					else
					{
						$("#login-error").text("Oops! Please try again");
					}
				}
				else
				{
					$("#login-error").text("That username does not exist.");
				}
			});
		}
		else {
			$("#login-error").text("Oops! Please try again");
		}

	})


	//WHEN USER PRESSES SIGNUP BUTTON
	$("#signup-button").on("click", function(event) {
		event.preventDefault();
		var name = $("#sign-name").val().trim();
		var username = $("#sign-username").val().trim();
		var password = $("#sign-password").val().trim();

		var nameAppropriate = true;
		for (var i = 0; i < username.length; i++)
		{
			if (username.charAt(i) === " " ||
				username.charCodeAt(i) < 47 ||
				(username.charCodeAt(i) >57 && username.charCodeAt(i) < 65) ||
				(username.charCodeAt(i) > 90 && username.charCodeAt(i) < 97) ||
				username.charCodeAt(i) > 122 )
			{
				nameAppropriate = false;
				break;
			}
		}

		if(name)
		{
			if(username)
			{
				$.get("/api/users/"+username).then(function(response){
					if(response === null || response.length === 0)
					{
						if(nameAppropriate)
						{
							if(password !== null)
							{
								if (password.length >= 6)
								{
									var newUser = {
										name: name,
										username: username,
										password: password
									}
									$.ajax("/api/users/", {
										type: "POST",
										data: newUser
									}).then(
									function() {
										window.location="/home/"+username+"/";
									})
								}
								else
								{
									$("#signup-error").text("Your password must be at least 6 characters long");
								}
							}
							else
							{
								$("#signup-error").text("Oops! Please enter a password.");
							}
						}
						else
						{
							$("#signup-error").text("Oops! A username can only contain letters and numbers.");
						}
					}
					else
					{
						$("#signup-error").text("This username is already taken. Try another!");
					}
				});
			}
			else
			{
				$("#signup-error").text("Oops! Please enter a username.");
			}
		}
		else {
			$("#signup-error").text("Oops! Please enter your name.");
		}

	})
	function myFunction() {
    	document.getElementById("nav-links").classList.toggle("show");
	}

	//CODE FOR MODAL TO WORK
	var modal = document.getElementById("signup-modal");

	$("#signup-link").on("click", function() {
		modal.style.display = "block";
	});
	$(".close").on("click", function() {
		modal.style.display = "none";
	})
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
})