console.log('-----------------------------------------');
// '-----------------------------------------'
// lib js - JQuery

// $() - syntax cho câu query ~ document.querySelector || document.querySelectorAll

// console.log($('#billAmount')); // like array || sử dụng spread syntax để chuyển về dạng array

// document.querySelectorAll('#billAmount').addEventListener('click', () => {
// 	console.log('trigger by plain JS');
// });

// document.querySelectorAll('.btn-success').forEach(function (element) {
// 	element.addEventListener('click', () => {
// 		console.log('trigger by plain JQuery');
// 	});
// });
function handlerClick(event) {
	console.log(event);
	console.log('trigger by JQuery');
}

$('.btn-success').click(() => {
	// $('.btn-success').fadeOut();
	$('.btn-success').css('width', '250px');
});

// $('.btn-success').addClass('text-warning');
// $('.btn-success').removeClass('text-warning');
// $('.btn-success').toggleClass('text-warning');

// CDN: content delivery network
console.log('-----------------------------------------');
