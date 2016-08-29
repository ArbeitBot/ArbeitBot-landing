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

	var users;

	$.ajax({
		type:     "GET",
		url:      "https://crossorigin.me/http://178.62.220.240:3000/getStats",
		dataType: "json",
		success: function(data){
			$("#f-user-count").text(data.userCount);
			$("#f-jobs-count").text(data.jobCount);
			$("#f-freelancer-count").text(data.freelancerCount);
			$("#p-user-count").text(data.userCount);
			users = data.userCount;
			setBar();
		}
	});

	function setBar() {
		var val = Math.floor((users/1000)*100);
		$('.progress .bar').each(function() {
			$(this).attr('style', 'width:' + val + '%;background-position:0 ' + val + '%');
		});
		$("#user-percentage").text(val);
	}

});

$(window).load(function () {
	  $(".owl-item").hide();
});