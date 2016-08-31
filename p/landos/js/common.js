$(document).ready(function() {

	var owl = $("#slider");

	owl.owlCarousel({
		navigation: false,
		pagination: true,
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true,
		autoPlay : 5000,
		addClassActive:true,
		afterAction: changeFeatureImg
	});

	function changeFeatureImg() {
		//alert("hey" + this.owl.currentItem);
		switch (this.owl.currentItem) {
			case 0:
				$('#feature-img').attr('src','img/features/0.jpg').hide().fadeIn();
				break;
			case 1:
				$('#feature-img').attr('src','img/features/1.jpg').hide().fadeIn();
				break;
			case 2:
				$('#feature-img').attr('src','img/features/2.jpg').hide().fadeIn();
				break;
			case 3:
				$('#feature-img').attr('src','img/features/3.jpg').hide().fadeIn();
				break;
			case 4:
				$('#feature-img').attr('src','img/features/4.jpg').hide().fadeIn();
				break;
			case 5:
				$('#feature-img').attr('src','img/features/5.jpg').hide().fadeIn();
				break;
			case 6:
				$('#feature-img').attr('src','img/features/6.jpg').hide().fadeIn();
				break;
		}
	}

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
	  $(".owl-item").not(".active").hide();
});