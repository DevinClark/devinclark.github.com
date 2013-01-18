$(function() {

	$(".bar-graph li").each(function() {
		$(this).css('width', $(this).attr("data-level"));
	});

});