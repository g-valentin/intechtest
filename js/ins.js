function addSettings(o){
	return{
		name:o,
		size:"240px",
		style:"original",
		tryToSharpen:!0,
		autoPlay:!0,
		repeat:"loop",
		repeatDelay:2,
		drawOnViewport:!0
	}
}
$(document).ready(function(){
	$(".slider-content").slick({
	slidesToShow:1,
	slidesToScroll:1,
	infinite:!0,
	fade:!0,
	autoplay:!0,
	autoplaySpeed:3e3,
	appendArrows:$(".slider-arrows"),
	mobileFirst:!0,
	prevArrow:$(".arrow-left"),
	nextArrow:$(".arrow-right")
}),
$(".team-icon").addLiviconEvo(addSettings("users.svg")),
$(".graph-icon").addLiviconEvo(addSettings("bar-chart.svg")),
$(".thumb-up-icon").addLiviconEvo(addSettings("like.svg")),
$(window).scroll(function(){
	$(window).scrollTop()>30?(
	$("#navbar").addClass("nav-fixed-top"),
	$(".logo-img").attr("src","../assets/img/logo_small.png")):(
	$("#navbar").removeClass("nav-fixed-top"),
	$(".logo-img").attr("src","../assets/img/logo.png"))})});