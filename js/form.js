$(document).ready(function(){
	$("#get_head_cont").click(function() { 
		let name = $("#name").val().trim();
		let email = $("#email").val().trim();
		let Subject = $("#Subject").val().trim();
		let massage = $("#massage").val().trim();

		if (email == "") {
			$("#errmess").text("Введите email");
			return false;
		}

});

