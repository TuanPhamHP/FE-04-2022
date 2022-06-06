console.log('-----------------------------------------');
// '-----------------------------------------'
// OBJECT
let me = {
	name: 'Tuấn',
	age: 18,
	privateAge: 18,
	bestFriend: {
		// nested object
		name: 'Quân',
		age: 18,
		privateAge: 18,
	},
};
let mySelf = {
	name: 'Tuấn',
	age: 18,
	privateAge: 18,
	1: 'haha',
	'non-primitive-val': { a: '1' },
};
// Object.keys(objTarget): trả ra mảng các keys của objTarget
// Object.values(objTarget): trả ra mảng các values của objTarget
// console.log(Object.keys(mySelf));
// => Object rỗng là object có mảng keys || mảng values rỗng
let cloneMe = me;

// cloneMeV2 = x
// CÁCH 1 - constructor methods - Object.assign(var1, var2)
// var1: target object
// var2: source object
// const target = { a: 1, b: 2 }; // req
// const source = { b: 4, c: 5 }; // opt
// let x = Object.assign(me, target); // demo TH1
// let x = Object.assign(target, me); // demo TH2

// opt ~ optional => có thể có hoặc để trống
// => Act 1: gộp 2 object target, source vào làm 1 obj theo thứ tự của biến
// => Act 2: TH1: nếu target đã là 1 địa chỉ ô nhớ => sẽ trỏ đến và update giá trị lưu trữ của đia chỉ ô nhớ đó bằng obj kết quả của act 1
// 					 TH2: nếu target không là 1 địa chỉ ô nhớ => xin cấp phát 1 địa chỉ ô nhớ trống để lưu lại obj kết quả từ act 1
// console.log(x);
// console.log(x === me);

// CÁCH 2 - dùng spread syntax (spread object)
// syntax { ...objectTarget1, ...objectTargetN }

// let x = { ...mySelf, ...{ desc: 'Test' }, ...me };

// console.log(me, 'me');
// console.log(x, 'x');
// console.log(x === me);
// Note: objectTarget phải là object

// console.log('-----------------------------------------');
// let a = x

// TH1: x là địa chỉ ô nhớ. => trỏ thẳng đến địa chỉ x
// TH2: x không phải là địa chỉ ô nhớ. => được cấp phát 1 địa chỉ ô nhớ mới để lưu trữ x

// Cách để thao tác với phần tử object (CRUD)
// R - read - đọc dữ liệu
// syntax: objName.key (key coi như 1 key) | không được là số, không chứa ký tự đặc biệt, không phải dạng dash-name (object-key-name)
// syntax: objName[key] (key coi như 1 biến) | keyValue
// console.log(mySelf.privateAge);
console.log(' R - read - đọc dữ liệu', mySelf.privateAge);
let key = 1;
console.log(' R - read - đọc dữ liệu', mySelf[key]);

// U - update - update dữ liệu
// syntax: objName.key = newValue;
// syntax: objName[key] = newValue;
const newObjVal = 'Obj new val';
mySelf.privateAge = newObjVal;

console.log(' U - update - update dữ liệu', mySelf);

// C - create - create dữ liệu
// syntax: objName.newKey = newValue;
// syntax: objName[newKey] = newValue;
mySelf.def = newObjVal;

console.log(' C - create - create dữ liệu', mySelf);

// D - delete - delete dữ liệu
// syntax: delete objName.newKey
// syntax: delete objName[newKey]
delete mySelf.def;

console.log(' D - delete - delete dữ liệu', mySelf);
// '-----------------------------------------'
// ARRAY - MẢNG
// dùng để lưu trữ data dạng list
// VD: lớp 45 thành viên  => 45 items, lớp là 1 mảng. mỗi item là 1 giá trị(1 trong các kiểu giá trị đã học)

console.log('');
console.log('');
console.log('array');
let arr = [1, 'a', me, 'length'];
let cloneArr = arr;
// index 0
// cũng quản lí qua key, value. nhưng key ở đây là index => maxIndex = length - 1
console.log(me);
console.log(arr);
// Cách để thao tác với phần tử mảng (CRUD)
// R - read - đọc dữ liệu
// syntax: arrayName[index]
console.log(' R - read - đọc dữ liệu', arr[2]);
// U - update - update dữ liệu
// syntax: arrayName[index] = newValue;
arr[0] = mySelf;
console.log(' U - update - update dữ liệu', arr[0]);
// C - create - create dữ liệu
// syntax: arrayName[newIndex] = newValue;
// syntax: method arrayName.push(newValue);
// syntax: method arrayName.splice();
// syntax: spread [...arrayName,newValue] (spread array)
const newValue = 'Đây là giá trị mới';
// arr.push(newValue);

// arr.splice(0, 0, 'Hello');
// arr = ['Giá trị đầu', ...arr, 'Giá trị cuối'];
console.log(' C - create - create dữ liệu', arr);
// D - delete - delete dữ liệu
// syntax: method arrayName.splice(numb1,numb2,value);
// numb1: index-điểm bắt đầu cắt
// numb2: số lượng phần tử sẽ cắt
// value: giá trị bù
console.log(arr);
arr.splice(1, 2);
console.log(' D - delete - delete dữ liệu', arr);
console.log('-----------------------------------------');

// CRUD
// C: create
// R: read
// U: update
// D: delete
// => mảng như thế nào gọi là mảng rỗng? Là mảng có tổng số các phần tử có index >= 0 là 0
// let brr = [];
// brr[-3] = '1';
// console.log(brr);
// console.log('mảng đã cho có rỗng hay không: ', !brr.length);

// cần note xem cách nào tạo ra 1 địa chỉ mảng mới
// đọc về các methods khác của mảng: pop(), reduce() || forEach(), map(),
