$(document).ready(function () {
	$("#comment_input").on('keyup', function (e) {
		if (e.key === 'Enter' || e.keyCode === 13) {
			 const comment = $("#comment_input").val();
			 const id = $("#id").data('id');

			 const data = {
				 comment, id,
			 }

			 $.post("/film/comment", data, (res) => {
					location.reload();
			 });
		}
	});
});


