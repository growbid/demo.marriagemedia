// image map jas
$(document).ready(function(e) {
	$('img[usemap]').rwdImageMaps();

	$('area').on('click', function() {
		alert($(this).attr('alt') + ' clicked');
	});
});
// end image map js