$("#search").keyup(function() {
	var current_query = $("#search").val().toLowerCase();
	if (current_query != "") {
		$(".thumbnails a").hide();
		$(".thumbnails a").each(function() {
			var current_keyword = $(this).attr("title").toLowerCase();
			if (current_keyword.indexOf(current_query) >= 0) {
				$(this).show();
			}
		});
	} else {
		$("#thumbnails a").show();
	}
});