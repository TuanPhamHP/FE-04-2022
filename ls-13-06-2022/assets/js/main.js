console.log('-----------------------------------------');
// '-----------------------------------------'
// DOM
// D: Document
// O: Object
// M: Model

// CRUD

// step1: truy cập được vào document
// console.log(document);
// step2: đưa ra câu query tương ứng

// L1: query bằng attribute đặc biệt
// className - Số nhiều - trả ra 1 mảng collection (like array) chứa các element thỏa mãn câu query(có chứa class cần tìm)
const queryByClassName = document.getElementsByClassName('container'); // like Array - Collection
// sử dụng spread syntax để chuyển về dạng array.
console.log(queryByClassName, 'queryByClassName b4');
// Lấy dạng số ít
console.log(queryByClassName[0], 'queryByClassName[0] b4');
// id - Số ít
const queryById = document.getElementById('demoText'); // Node - Object
console.log(queryById, 'queryById b4');
// tagName - Số nhiều
const queryByTagName = document.getElementsByTagName('p'); // like Array - Collection
// sử dụng spread syntax để chuyển về dạng array.
console.log(queryByTagName, 'queryByTagName b4');
// '-----------------------------------------'
console.log('-----------------------------------------');

// L2: query bằng selector
// Lấy số ít - lấy phần tử đầu tiên thỏa mãn query (theo hướng đọc từ trên xuống) - return ra 1 element
const querySelectorOnly = document.querySelector('.container a');
console.log(querySelectorOnly, 'querySelectorOnly');

// Lấy số nhiều - lấy phần tử đầu tiên thỏa mãn query (theo hướng đọc từ trên xuống) - return ra nodeList (like array)
const querySelectorAll = document.querySelectorAll('.container a');
// sử dụng spread syntax để chuyển về dạng array.
// console.log([...querySelectorAll], 'querySelectorAll after');
console.log(querySelectorAll, 'querySelectorAll');

// const employee = {
// 	id: 1, // primary key
// 	name: 'Nguyễn Văn A',
// 	age: 22,
// };

const target = document.querySelector('#idTest');
const classList = target.classList;
console.log(target.classList.contains('new-one'));
target.classList.add('new-one');
console.log(target.classList.contains('new-one'));
target.classList.remove('new-one');
console.log(target.classList.contains('new-one'));
console.log([...classList]);
// add ~ thêm class vào mảng nếu chưa có
// remove ~ xóa class khỏi mảng nếu có
// toggle ~ add + remove by condition
// contains ~ includes

function addClassName(sourceObj, _validName = '') {
	if (Array.isArray(sourceObj.listName)) {
		sourceObj.listName.push(_validName);
	} else {
		console.error('Provided object is not valid');
	}
}

const element1 = {
	// 1 đống prototype ở đây
	className: {
		listName: ['container', 'main-pages', 'home-section'],
		add(_validName) {
			if (String(_validName).includes(' ')) {
				console.error('Provided validName is not valid');
				return;
			}
			if (Array.isArray(this.listName)) {
				if (this.listName.includes(_validName)) {
					console.log('Đã có tên class, bỏ qua phần code còn lại');
				} else {
					this.listName.push(_validName);
					console.log(`Thêm thành công ${_validName}`);
				}
			} else {
				console.error('Provided object is not valid');
			}
		},
	},
	attributes: {
		listName: ['class', 'id', 'data-target'],
		readAttributeByName(_name) {},
	},
	// 1 đống prototype ở đây
};
const element2 = {
	className: 'container-fl',
};
let documentFake = [element1, element2];

element1.className.add('try-to-push-new-class-name');
const rslt = documentFake.filter(o => o.className === 'container');
// console.log(element1.className);
//
// get: lấy data
// update, create: thay đổi data
// delete, remove: xóa data
//

// className: .className
// tagName: tagName
// id: #id

// CRUD - R

// ATTRIBUTES của 1 thẻ

const targetToHandleAttr = document.querySelector('#idTest');
console.log(targetToHandleAttr.getAttribute('class'));
const prevClass = targetToHandleAttr.getAttribute('class');
targetToHandleAttr.setAttribute('class', prevClass + ' try-me');
console.log(targetToHandleAttr.getAttribute('class'));
