console.log('-----------------------------------------');
// '-----------------------------------------'

// {
// 	name: 'Nhà hàng A',
// 	amount: '12',
// 	tip: 0,
// 	created_time: new Date(),
// 	id: randomId (unique) - primary key,
//  total:
// }
let billArray = [];
let selectedBill = '';

function setSelectedBill(val) {
	selectedBill = val;
}
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
function removeBill(billId) {
	billArray = billArray.filter(function (bill) {
		return bill.id !== +billId;
	});
	renderResult(billArray);
}
function removeBillSplice(billId) {
	// splice(var1,var2, var3)
	// var1 - start index
	// var2 - amount
	// var3 - replace
	const idx = billArray.findIndex(function (bill) {
		return bill.id === +billId;
	});
	if (idx === -1) {
		// không có phần tử thỏa mãn
		console.log('không có phần tử thỏa mãn');
	} else {
		// có ít nhất 1 phần tử thỏa mãn
		billArray.splice(idx, 1);
	}
	renderResult(billArray);
}
function updateBillSplice(billId, newObj) {
	// splice(var1,var2, var3)
	// var1 - start index
	// var2 - amount
	// var3 - replace
	const idx = billArray.findIndex(function (bill) {
		return bill.id === +billId;
	});
	if (idx === -1) {
		// không có phần tử thỏa mãn
		console.log('không có phần tử thỏa mãn');
		return;
	}
	// có ít nhất 1 phần tử thỏa mãn
	setSelectedBill('');
	$('#uBillName').val('');
	$('#uBillAmount').val('');
	$('#updateWrapper').addClass('d-none');
	billArray.splice(idx, 1, newObj);

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
		<td class="text-center"><button type="button" class="btn btn-danger btn-remove-bill-table" data-bill-id="${bill.id}">Remove</button>
		<button type="button" class="btn btn-info btn-update-bill-table" data-bill-id="${bill.id}">Update</button>
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
		$('.btn-remove-bill-table').click(e => {
			const billId = $(e.target).attr('data-bill-id');
			// removeBill(billId);
			removeBillSplice(billId);
		});
		$('.btn-update-bill-table').click(e => {
			const billId = $(e.target).attr('data-bill-id');
			const bill = billArray.find(function (bill) {
				return bill.id === +billId;
			});
			// find: trả ra giá trị đầu tiên mà thỏa mãn điều kiện trong mảng. phần tử || undefined
			if (!bill) {
				alert('không có phần tử thỏa mãn');
				return;
			}
			$('#uBillName').val(bill.name);
			$('#uBillAmount').val(bill.amount);
			$('#updateWrapper').removeClass('d-none');

			setSelectedBill(billId);
		});
	}
	// console.log(str);
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
$('#btnUpdateBill').click(() => {
	const bill = billArray.find(function (bill) {
		return bill.id === +selectedBill;
	});
	// find: trả ra giá trị đầu tiên mà thỏa mãn điều kiện trong mảng. phần tử || undefined
	if (!bill) {
		alert('không có phần tử thỏa mãn');
		return;
	}
	bill.name = $('#uBillName').val();
	bill.amount = $('#uBillAmount').val();
	updateBillSplice(selectedBill, bill);
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

// remove
// c1 dùng filter.
// - trả ra 1 mảng mới (không thay đổi mảng gốc) mà có các phần tử phù hợp với điều kiện lọc
// c2 dùng splice
// - tác động trực tiếp làm thay đổi mảng gốc. mảng mới sẽ được thay đổi dựa vào 3 tham số của method

// localStorage, sessionStorage
// cookie
// IDB
