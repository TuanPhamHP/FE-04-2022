console.log('-----------------------------------------');
// '-----------------------------------------'
// cần note xem cách nào tạo ra 1 địa chỉ mảng mới
// đọc về các methods khác của mảng: pop(), reduce() || forEach(), map().

// CONDITION-điều kiện,
// LOOP-vòng lặp
// FUNCTION - chương trình

// CONDITION-điều kiện

// IF - ELSE

// if(condition){
// 	// block code if condition = true
// }

// if(condition){
// 	// block code if condition: true
// }else{
// 	block code if condition: false
// }

// if(condition1){
// 	// block code if condition1: true
// }else if(condition2){
// 	block code if condition1: false and condition2: true
// }else{
// 	block code if condition1: false and condition2: false
// }
let age = 21;
// if (age > 20) {
// 	console.log('Trên 20 tuổi');
// } else if (age === 20) {
// 	console.log('Bằng 20 tuổi');
// } else if (age === 19) {
// 	console.log('Bằng 19 tuổi');
// } else if (age === 18) {
// 	console.log('Bằng 18 tuổi');
// } else {
// 	console.log('Dưới 18 tuổi');
// }

// VD cần thực hiện n hành động khác nhau với n condition (mang tính chính xác VD: age === 20,)
//
// switch (key) {
// 	case value:
//  	block code if key === value
// 		break;

// 	default:
//  	block code if key not match with any value above
// 		break;
// }

// switch (age) {
// 	case 20:
// 		console.log('Bằng 20 tuổi');
// 		break;
// 	case 21:
// 		console.log('Bằng 21 tuổi');
// 		break;
// 	default:
// 		console.log('Không bằng 20 hay 21 tuổi');
// 		break;
// }

// let user = {
// 	name: 'ABC',
// 	gender: 1,
// };

//  => key: là 1 biến để xét giá trị
// value: là 1 giá trị xác định để so sánh tuyệt đối với key (thường chỉ sử dụng primitive type)
// break: là câu thoát phần điều kiện (có thể thay thế bằng return);

// syntax condition ? code-if-true : code-if-false
// let msg = '';
// const currentHour = 17;
// if (currentHour < 10) {
// 	msg = 'Chào buổi sáng';
// } else {
// 	msg = 'Chào buổi trưa';
// }

// msg = currentHour < 10 ? 'Chào buổi sáng' : currentHour < 17 ? 'Chào buổi trưa' : 'Chào buổi tối';
// console.log(msg);

// '-----------------------------------------'

// LOOP-vòng lặp
// Vòng lặp for (for-loop);
// for
// for (a; b; c) {
//  a - bước 1 : khai báo biến đếm (biến điều kiện)
// 	b - bước 2 : điều kiện dừng
// 	c - bước 3 : bước nhảy
// coi như thực hiện vòng for n lần
//  với lần thứ 0: a -> b -> code -> c
//  với lần thứ 1 -> n: b -> code -> c
//  với lần thứ n -> b -> end

//  với lần thứ 1 -> n: b ? -> code -> c : end
// }
// let n = 4;
// let a = [1, 2, 3, 4, 'hello', 'kitty'];

// for (let index = 0; index < a.length; index++) {
// 	console.log(a[index]);
// }

// '-----------------------------------------'

// FUNCTION - chương trình
// là 1 tập hợp các câu lệnh dùng để thực hiện 1 hoặc nhiều nhiệm vụ. function cũng là 1 dạng data, có type là object
// syntax
function functionName(_variable, _variable1 = 1, _variable2, _variable3, _variable4) {
	console.log(_variable);
	// Scope code
	// return _variable;
	// console.log(_variable, 'l2');
}
// function: là câu khai báo (giống var, let, constant) - function sẽ có tính "top scope" | HOISTING
// functionName: tên function (giống tên biến)
// _variable: biến đầu vào (input), không giới hạn số lượng (phân cách bằng dấu ,),
// 						không quan trọng tên (nhưng phải tuân thủ cách đặt tên biến trong js),
// 						quan trọng nhất là thư tự, có thể khởi tạo giá trị mặc định (initial value).
// Để thực hiện 1 function (chạy 1 function) bằng cách sử dụng syntax: functionName()
let result = functionName('Haha');
const functionNameByConst = (_variable, _variable1 = 1, _variable2, _variable3, _variable4) => {
	console.log(_variable);
	return;
};
// () =>{} : là arrow function. mang tính không định danh - được coi là annoymous function, scope có tính out scope;
console.log(result, 'result');
// '-----------------------------------------'
console.log('-----------------------------------------');
// for in
// for of
// do while
// OBJECT ARRAY
// HOISTING
// arrayName[index]

// tạo 1 function thông báo tên người dùng với input là tên người dùng
// output là msg: 'Xin chào, tôi là ' + tên_người_dùng + '!!!'

function logNameUser(_userName) {
	console.log(`Xin chào, tôi là ${_userName}!!!`);
}

logNameUser('Tuấn 1');
