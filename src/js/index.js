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

var hamburger = document.querySelector('.hamburger_button');
var pop = document.querySelector('.pop_list_container');
var body = document.querySelector('body');
var lines = document.querySelectorAll('.hamburger div')

hamburger.addEventListener("click",function(){
	pop.classList.toggle("open2");
	body.classList.toggle("scroll");
	lines.forEach(function(line){
		line.classList.toggle("change");
	})
});

var imgs = document.querySelectorAll('.places_img');
// var info = document.querySelector('.places_info-2');
// var button = document.querySelector('.places_img button');

imgs.forEach(function(img){
	var info = img.children[1];
	var button = img.children[2];
	button.addEventListener("click",function(){
		info.classList.toggle("appair");
		button.classList.toggle("spin");
	});
});