console.log('-----------------------------------------');
// '-----------------------------------------'
// cần note xem cách nào tạo ra 1 địa chỉ mảng mới
// đọc về các methods khác của mảng: pop(), reduce() || forEach(), map(), filter().
function isNumber(_data) {
	return !!_data;
}
function handleBills(_billArray) {
	// dùng method của constructor Array
	if (!Array.isArray(_billArray)) {
		console.log('Dữ liệu đầu vào sai, vui lòng kiểm tra lại');
		return;
	}
	// đến đây đã đảm bảo được việc _billArray là 1 mảng
	const billLength = _billArray.length;
	// let allIsNumb = true;

	// for (let index = 0; index < billLength; index++) {
	// 	// Check xem toàn bộ phần tử của mảng có phải số không (tự tìm hiểu theo 3 cách)

	// 	// Có ít nhất 1 phần tử thỏa mãn
	// 	if (!isNumber(_billArray[index])) {
	// 		allIsNumb = false;
	// 	}
	// }

	// // Thỏa mãn toàn bộ - every(): trả ra 1 giá trị cuối là boolean
	// console.log(
	// 	_billArray.every(function (item, index) {
	// 		console.log(item, index);
	// 		return true | false;
	// 	})
	// );
	// // Có ít nhất 1 phần tử thỏa mãn - some(): trả ra 1 giá trị cuối là boolean
	// console.log(
	// 	_billArray.some(function (item, index) {
	// 		console.log(item, index);
	// 		return true | false;
	// 	})
	// );

	let allIsNumb = _billArray.every(function (item, index) {
		return isNumber(item);
	});

	if (!allIsNumb) {
		// Không thỏa mãn điều kiện toàn bộ phần tử của mảng là số.
		console.log('Dữ liệu đầu vào sai, vui lòng kiểm tra lại');
		return;
	}
	// // Đảm bảo được toàn bộ phần tử là dạng số
	// // forEach(): lặp qua từng phần tử của mảng: không trả ra giá trị
	// let totalBill = 0;
	// _billArray.forEach(function (item) {
	// 	totalBill += item;
	// });

	// // reduce(): lặp qua từng phần tử của mảng, thực hiện tương tác giữa 2 phần tử liền kề và trả ra 1 giá trị cuối

	// // map():
	console.log(totalBill, 'totalBill');
	console.log(allIsNumb);
}
// c1 Dùng regex: Chuỗi chính quy là chuỗi chỉ có kí tự 0->9

// c2: đẩy về chuỗi -> đẩy về number (không được dùng parseInt, parseFloat), check theo isNaN của riêng number

// c3: search stack

// '-----------------------------------------'
console.log('-----------------------------------------');
// is,can,ableTo,has .... -> true | false
// NaN = Not a Number

// function demoCallback(callback1) {
// 	// Phải đảm bảo callback1 là 1 function
// 	callback1();
// }
// function fackeFnc() {
// 	console.log('đây là fnc fake');
// }
// fackeFnc();
// demoCallback(fackeFnc);

const exampleArray = [1, 2, 3, 4];

// for (let index = 0; index < exampleArray.length; index++) {
// 	const currentItem = exampleArray[index];
// 	// logic with currentItem
// 	console.log(currentItem);
// }

// let x = exampleArray.forEach(function (item, i, array) {
// 	console.log(item);
// 	console.log(array);
// });
// const total1 = 1000;
// const total2 = exampleArray.reduce(function (prvVal, currentVal, currentIndex) {
// 	console.log(prvVal, currentVal, currentIndex);
// 	return prvVal + currentVal;
// });
// console.log(total1 + total2);

// const exampleArrayMultipleBy4 = [];
// exampleArray.forEach(function (item, i, array) {
// 	exampleArrayMultipleBy4.push(item * 4);
// });
// console.log(exampleArrayMultipleBy4);

// const exampleArrayMultipleBy4 = exampleArray.map(function (item, i, array) {
// 	let resultToReturn;
// 	item * 4;
// 	return resultToReturn;
// });
// console.log(exampleArrayMultipleBy4);

const exampleArrayMap = exampleArray.filter(function (item, i, array) {
	// chỉ return được dạng boolean (tự động ép kiểu nếu không đúng)
	return item > 4;
});

console.log(exampleArrayMap.length ? `Có ${exampleArrayMap.length} phần tử thỏa mãn` : 'Không phần tử nào thỏa mãn');

// forEach():
// map():
// every():
// some():
// reduce():
// filter():

// Map
// - sinh ra 1 mảng mới từ mảng gốc;
// - số lượng phần tử = mảng gốc (không thể thay đổi);
// - giá trị phần tử phụ thuộc vào giá trị khi return (có thể thay đổi);

// Filter
// - sinh ra 1 mảng mới từ mảng gốc
// - số lượng phần tử phụ thuộc vào giá trị khi return (có thể thay đổi)
// - giá trị phần tử = giá trị của phần tử đó mảng gốc (có thể thay đổi)
