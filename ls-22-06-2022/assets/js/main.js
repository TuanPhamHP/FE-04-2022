console.log('-----------------------------------------');
// '-----------------------------------------'

// {
// 	name: 'Nhà hàng A',
// 	amount: '12',
// 	tip: 0,
// 	created_time: new Date(),
// 	id: randomId (unique) - primitive key,
//  total:
// }
let billArray = [];

const btnAddBill = document.querySelector('#btnAddBill');
function calculateTipByValue(_numb) {
	if (_numb > 50) {
		return +Number(_numb * 0.1).toFixed(2);
	} else if (_numb > 30) {
		return +Number(_numb * 0.12).toFixed(2);
	} else {
		return 2;
	}
}
const billNameE = document.querySelector('#billName');
const billAmountE = document.querySelector('#billAmount');
function getUserData() {
	if (billNameE && billAmountE) {
		// đã đảm bảo được việc có đủ element
		const billName = billNameE.value;
		const billAmount = billAmountE.value;
		// check 1 số điều kiện cơ bản
		if (!billName.trim() || !billAmount.trim()) {
			// 1- phải ghi đủ data
			alert('Cần điền đủ data.');
			return;
		}
		// .. các logic valid khác cần tự tìm hiểu VD: valid number, string length

		// coi như đã thỏa mãn toàn bộ điều kiện. Tiến hành tạo bản ghi
		const tip = calculateTipByValue(+billAmount);
		const total = tip + +billAmount;
		const obj = {
			name: billName,
			amount: +billAmount,
			created_time: new Date().getTime(), // utc, iso, timestamp
			id: new Date().getTime(),
			tip,
			total,
		};
		billArray.push(obj);
		billNameE.value = '';
		billAmountE.value = '';
		billNameE.focus();
		renderResult(billArray);
		// renderResultNode(billArray);
		return;
	}
	alert('Element đầu vào không hợp lệ.');
}
function removeBill(billObject) {
	billArray = billArray.filter(function (bill) {
		return bill.id !== billObject.id;
	});

	renderResult(billArray);
}
function renderResult(_arr) {
	// SD innerHTML
	// splice(indexStart, numberOfItems, rest)
	// findIndex()
	let str = '';
	_arr.forEach(function (bill, index) {
		str += `<tr>
		<th> ${bill.name}</th>
		<td> $${bill.amount}</td>
		<td class="text-center">$${bill.tip}</td>
		<td class="text-center">${bill.total}</td>
		<td class="text-center"><button type="button" class="btn btn-danger">Remove</button>
		<button type="button" class="btn btn-info">Update</button>
		<button type="button" class="btn btn-success">Up</button>
		<button type="button" class="btn btn-success">Down</button>
		</td>
		</tr>`;
	});
	// hoàn thành các dòng
	let tipTotal = 100; // sử dụng method reuduce() để tính toán
	let billTotal = 1000; // sử dụng method reuduce() để tính toán
	str += `<tr class="bg-dark">
	<th class="text-white" colspan="2">Tổng</th>
	<th class="text-center text-white">$${tipTotal}</th>
	<th class="text-center text-white">$${billTotal}</th>
	<th class="text-center text-white">
	</th>
</tr>`;
	const target = document.querySelector('#table-result tbody');
	if (target) {
		target.innerHTML = str;
	}
	console.log(str);
}

function renderResultNode(_arr) {
	// SD create element
	const target = document.querySelector('#table-result tbody');
	_arr.forEach(function (bill, index) {
		const tr = document.createElement('tr');
		// amount
		const tdAmount = document.createElement('td');

		tdAmount.innerText = `$${bill.amount}`;
		// tip
		const tdTip = document.createElement('td');
		tdTip.setAttribute('class', 'text-center');
		tdTip.innerText = `$${bill.tip}`;
		// total
		const tdTotal = document.createElement('td');
		tdTotal.setAttribute('class', 'text-center');
		tdTotal.innerText = `$${bill.total}`;
		//
		tr.appendChild(tdAmount);
		tr.appendChild(tdTip);
		tr.appendChild(tdTotal);
		target.appendChild(tr);
	});
	// hoàn thành các dòng
	let tipTotal = 100; // sử dụng method reuduce() để tính toán
	let billTotal = 1000; // sử dụng method reuduce() để tính toán
}

btnAddBill.addEventListener('click', getUserData);
billNameE.addEventListener('keypress', e => {
	// e: event
	if (e.keyCode === 13) {
		if (billNameE.value.trim()) {
			billAmountE.focus();
		} else {
			alert('Bạn chưa nhập tên nhà hàng');
		}
	}
});
billAmountE.addEventListener('keypress', e => {
	// e: event
	if (e.keyCode === 13) {
		if (billAmountE.value.trim()) {
			getUserData();
		} else {
			alert('Bạn chưa nhập số tiền');
		}
	}
});
// '-----------------------------------------'
// Update bill
// Change position
console.log('-----------------------------------------');
