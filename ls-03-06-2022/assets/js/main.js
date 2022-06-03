console.log('-----------------------------------------');
// DOCS:
// 1. cách khai báo biến, gán biến trong JS.
// 2. các toán tử trong JS
// *. Tiếp tục học primitive type
// 3. toán tử trong js được thực hiện theo cách nào

// METHODS là gì
// FUNCTION là gì
// RETURN trong JS

// FUNCTION: một chương trình thực hiện 1 hoặc 1 số chức năng được lập trình sẵn, và đem lại kết quả mong muốn.

// 1. cách khai báo biến, gán biến trong JS.
// let, var, const, ...

// var variable_name = variable_value;

// variable_name: tên biến
// những cách khai báo biến thông dụng
// - lowercase, uppercase: variablename, VARIABLENAME
// uppercase: config variable, environment variable, settings
// - carmel: variableName
// - pascal: VariableName
// - underdash: variable_name
// - dash: variable-name
// -----
// variable_value: 1 trong các kiểu dữ liệu

// E.g
// Gán giá trị
// var myString = 'Xin chào';
// console.log(myString, ' | lần 1');
// // Gán lại giá trị mới
// myString = 'Hello';
// console.log(myString, ' | lần 2');
// let, const tương tự
// const myStringConst = 'Xin chào';
// console.log(myStringConst, ' | lần 1');
// myStringConst = 'Hello';
// console.log(myStringConst, ' | lần 2');

// => let, var có thể gán giá trị mới cho biến, constant thì không, giá trị của 1 biến const sẽ chỉ được init 1 lần duy nhất khi khai báo
// let, var hoisting, scope

// ------------------------------------

// 2. các toán tử trong JS
// let myString = 'Xin chào';
// myString += 'i';
// console.log(myString);
// Operators : toán tử tính toán, các loại còn lại

// let myNumb1 = 2;
// let myNumb2 = 4;
// let myRslt = myNumb1 % myNumb2;
// console.log(myRslt);

// *. Tiếp tục học primitive type
// NUMBER
// trong js number được thể hiện qua dạng bit => không được phép thực hiện tính toán với số dạng x.y

// int, float, double ...
//
//
// let a = 1.99;
// let b = 'ccc';
// let c = a + b;
// Number.parseFloat(c);
// Number.parseInt(c);
// Number.parseFloat:  parse variable về dạng float. input: any, output ra number (khi kí tự đầu tiên có thể convert sang number), NaN (còn lại)
// Number.parseInt:  parse variable về dạng int. input: any, output ra number (khi kí tự đầu tiên có thể convert sang number), NaN (còn lại)

// Math.floor =>input: any, output: number - interger (khi giá trị biến có thể convert sang number), NaN (còn lại)
// Math.round =>input: any, output: number - interger (khi giá trị biến có thể convert sang number), NaN (còn lại)

// console.log(Math.round('1.4'));
// console.log(Math.round(1.51));
// console.log(Math.round(1.5));

// console.log(Number.isInteger(Number.parseInt((1.59999999999999999999999999).toFixed(2))));
// BOOLEAN
// let d = true;
// null, undefined
// console.log(m);
// console.log('-----------------------------------------');
// NaN => Not a Number

// MUST READ
// SCOPE
// FUNCTION, CALL BACK,
// OBJECT, ARRAY

// VERSION JS

// SHOULD READ
// REST OPERATOR
// CONVERT DATA TYPE IN JS

// '-----------------------------------------'
// REST OPERATOR
// COMPARASION
// let a = '1';
// let b = 1;

// == : so sánh giá trị sau khi đã convert data (ép kiểu dữ liệu) | so sánh giá trị
// === : so sánh kiểu dữ liệu, nếu cùng kiểu thì so sánh giá trị | so sánh kiểu và giá trị
// >=, <=, >, <
// != : so sánh giá trị sau khi đã convert data (ép kiểu dữ liệu)
// !== : so sánh kiểu dữ liệu, nếu cùng kiểu thì so sánh giá trị | so sánh kiểu và giá trị

// console.log(a !== b);
// console.log(!(a === b));
// kiểu dữ liêu của a và b có khác nhau hay không? true
// (nếu false) giá trị của a và b có khác nhau hay không.
// console.log(a === b);

// nếu trời mưa VÀ tối thì tôi sẽ không đi ra ngoài
// => trời mưa = true , tối = true => không đi ra ngoài

// nếu trời mưa HOẶC tối thì tôi sẽ không đi ra ngoài
// =>trời mưa = true => không đi ra ngoài
// =>tối = true => không đi ra ngoài
// '-----------------------------------------'

// '-----------------------------------------'
// CONVERT DATA TYPE IN JS

// string -> number: dùng Methods, contructor. dùng dấu +
// nếu cả chuỗi có thể parse sang number thì kết quả là number mới (`1.2c`)
// nếu cả chuỗi không thể parse sang number thì kết quả là NaN
// E.g
// let string = '1.2c';
// console.log(+string);

// string -> boolean: dùng Methods, contructor. dùng dấu !
// trả ra true nếu chuỗi không rỗng, false nếu người lại
// kiểm tra số lượng kí tự trong chuỗi, 0:false
// E.g
// let string = '  123456  ';
// console.log(Boolean(string));
// console.log(!!string);
// console.log(string.length);
// console.log(string.trimStart(), string.trimStart().length);
// console.log(string.trimEnd(), string.trimEnd().length);
// console.log(string.trim(), string.trim().length);

// data -> string:  dùng Methods, contructor. dùng ``, dùng phép +
// let numb = 1;
// let boolean = true;
// console.log(numb);
// console.log('' + numb);
// console.log('' + boolean);

// number -> boolean
// trả ra false nếu number là 0.
// let numb = 0;
// console.log(!!0);

// data -> number: dùng Methods, contructor. dùng dấu +
// console.log(+'1');
// console.log(+false);
// console.log(+true);
// console.log(+null);
// console.log(!!undefined);

// '-----------------------------------------'

// '-----------------------------------------'
// OBJECT
let me = {
	name: 'Tuấn',
	age: 18,
	privateAge: 18,
};
let mySelf = {
	name: 'Tuấn',
	age: 18,
	privateAge: 18,
};

let cloneMe = me;
console.log(me, 'me');
console.log(cloneMe, 'cloneMe');
me.privateAge = 26;
// Cặp giá trị: key-value
// Giá trị của 1 object, biến: là địa chỉ ô nhớ
console.log(cloneMe === me);
console.log(me, 'me');
console.log(cloneMe, 'cloneMe');
console.log(mySelf);
// '-----------------------------------------'
console.log('-----------------------------------------');
