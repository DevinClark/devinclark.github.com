/*
Hello, it appears you are trying to view my source code. I have compressed this code to improve performance but you can view my  uncompressed code at the following URL:

https://github.com/DevinClark/devinclark.github.com/tree/master/javascripts

*/
$(function() {

	$(".bar-graph li").each(function() {
		$(this).css('width', $(this).attr("data-level"));
	});

});