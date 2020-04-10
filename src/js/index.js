// $(document).ready(function(){
// 	$(".hotel_items").slick({
// 		infinite: true,
// 		slidesToShow: 3,
// 		slidesToScroll: 1,
// 		arrows:true
// 	});
// });


var search = document.querySelector('.search_button');
var input = document.querySelector('.search input');
var list = document.querySelector('.link_vanish');

search.addEventListener("click",function(){
	input.classList.toggle("open");
	list.classList.toggle("vanish");
	search.classList.toggle("rotate");
	input.value = "";
});