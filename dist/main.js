$(document).ready(start);

function start(e){

	$("#form-box").on("submit",function(e){
    	e.preventDefault();
  	});

	var $form = $("#form-box");
	var $name = $("#username");
	var $password = $("#password");
	var $btn = $("#btn");
	
	$form.on("submit", validate);

	function validate(e){
		var foundError = true;

		if(foundError === true){
			$("#passwordLabel").siblings("#error").addClass("active-error").html("Please input a valid email and password before logging in.");
		}
		if($name.val() === "aaron@theironyard.com" && $password.val() === "password123" ){
			foundError = false;
			$("#passwordLabel").siblings("#error").removeClass("active-error");
		}
		if($name.val() == "admin@google.com" && $password.val() == "pandas" ){
			foundError = false;
			$("#passwordLabel").siblings("#error").removeClass("active-error");
		}
		if($name.val() == "zamora.mariac@gmail.com" && $password.val() == "honeycrisp" ){
			foundError = false;
			$("#passwordLabel").siblings("#error").removeClass("active-error");
		}
		console.log(foundError);
		if(foundError === false){
			window.location.href = "http://theironyard.com"
		}
	}
}
