$(document).ready(function (){

	$("#send").click(function() {
		validateForm();
	});

	function validateForm() {
		$(".names").checkNames().addClass('test');
		$("#nick").regexTest({pattern: "^[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłóńśźż]{1}[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłóńśźż]*$"});
		$("#email").checkEmail().addClass('test');
		// {pattern: /^a$/}
	}
		
});