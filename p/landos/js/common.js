$(document).ready(function() {

	$("#slider").owlCarousel({
		navigation: false,
		pagination: true,
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true,
		autoPlay : 5000,
		addClassActive:true
	});

	setBar();

});

function setBar() {
  $('.progress .bar').each(function() {
  	var val = 44;
    $(this).attr('style', 'width:' + val + '%;background-position:0 ' + val + '%');
  });
}