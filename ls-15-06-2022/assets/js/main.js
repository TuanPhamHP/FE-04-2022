console.log('-----------------------------------------');
// '-----------------------------------------'
// click (điều kiện xảy ra) vào button target (1 element bất kì) và thay đổi màu chữ của 1 thẻ (trigger 1 fnc nào đó)

const btnTarget = document.getElementById('btn-target');
const demoTarget = document.getElementById('idTest');

function changeColor(_target) {
	console.log(_target);
}

function changeColorV2() {
	const _target = document.getElementById('idTest');
	_target.classList.add('text-primary');
}
function msgConsole() {
	console.log('button target just clicked');
}

if (btnTarget) {
	// btnTarget.addEventListener('click', changeColorV2);
	// btnTarget.addEventListener('click', msgConsole);
	// btnTarget.addEventListener('click', function () {
	// thay đổi innerText, innerHTML
	// inner-HTML: được đọc như 1 đoạn ngôn ngữ HTML
	// inner-TEXT: được coi như 1 đoạn văn bản(tự động lược bỏ hoặc vô hiệu hóa ngôn ngữ html)
	// 	const listImgAddress = [
	// 		'https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg',
	// 		'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
	// 		'https://thumbs.dreamstime.com/b/broken-lens-14446644.jpg',
	// 	];
	// 	// thực hiện add ảnh vào trong thẻ img
	// 	const index = Math.floor(Math.random() * listImgAddress.length);
	// 	const src = listImgAddress[index];
	// 	demoTarget.innerHTML = `<img src="${src}" alt="dynamic" />`;
	// });

	// thực hiện tạo node mới
	// step1: tạo ra node
	// step2: gán node vào 1 vị trí
	btnTarget.addEventListener('click', function () {
		// thực hiện tạo node mới
		// step1: tạo ra node

		const newNode = document.createElement('div');
		// createElement(valid_tag_name)
		// step1.1: custom attribute;
		newNode.setAttribute('class', 'new-node-from-nowhere');
		newNode.setAttribute('id', '#emptyNode');
		// newNode.innerText = 'Đây là nội dung mới nè';
		newNode.innerHTML = `<h3>Đây là nội dung mới nè ${new Date().getTime()}</h3>`;
		newNode.addEventListener('click', () => {
			newNode.remove();
		});
		// step2: gán node vào 1 vị trí
		demoTarget.appendChild(newNode);
		// appendChild(valid_node): mặc định append xuống vị trí cuối

		console.log(newNode);
	});
}

// console.log(demoTarget, 'demoTarget');
// element= {
// 	innerText: 'Hello',
// 	innerHTML: 'Hello',
// }
// objName.key = newVal
// console.log(btnTarget);
console.log('-----------------------------------------');

// how to trigger a function by click html tag
// c1: using html attributes (eg: onclick, ondblclick .....)
// c2: using node method: addEventListner(valid-event-name, function()) - removeListener

// NOTE: luôn luôn phải đảm bảo có target trước khi gán hàm.
