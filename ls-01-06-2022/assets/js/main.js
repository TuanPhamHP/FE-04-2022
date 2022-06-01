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
let myString = 'Xin chào';
myString += 'i';
console.log(myString);
// Operators : toán tử tính toán, các loại còn lại

let myNumb1 = 2;
let myNumb2 = 4;
let myRslt = myNumb1 % myNumb2;
// console.log(myRslt);

// *. Tiếp tục học primitive type
// NUMBER
// trong js number được thể hiện qua dạng bit => không được phép thực hiện tính toán với số dạng x.y

// int, float, double ...
//
//
let a = 1.99;
let b = 'ccc';
let c = a + b;
Number.parseFloat(c);
Number.parseInt(c);
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
console.log(m);
console.log('-----------------------------------------');
// NaN => Not a Number

// MUST READ
// SCOPE
// FUNCTION, CALL BACK,
// OBJECT, ARRAY

// VERSION JS

// SHOULD READ
// REST OPERATOR
// CONVERT DATA TYPE IN JS

// Tuổi:
// -undefined: người dùng không khai báo.
// -null: người dùng MUỐN giá trị là null.
