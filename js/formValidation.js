$(document).ready(function (){

	$("#send").click(function() {
		validateForm();
	});

	function validateForm() {
		$(".regex").regexTest({pattern: /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłóńśźż]*$/});
		$("#email").checkEmail({pattern: /^a$/}).addClass('test');
	}
		
});