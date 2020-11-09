var isFaild = false;
// const isTrue: boolean = new Boolean(1)
// 2:7 - error TS2322: Type 'Boolean' is not assignable to type 'boolean'.
//   'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
// 2 const isTrue: boolean = new Boolean(1)
// 执行会报以上错误, 编辑器也会提示 isTrue 预期类型和实际返回类型不同.
var isBoolean = Boolean(1);
var decimal = 10;
var hexadecimal = 0xf00d;
var notANumber = NaN;
var infinityNumber = Infinity;
var str = 'koko';
var string = "i am " + str;
function returnVal() {
    console.log('i am a console without return');
}
var field = undefined;
// 如果赋值为 null, Type 'null' is not assignable to type 'void'
var u = undefined;
// u = null // Type 'null' is not assignable to type 'undefined'
var n = null;
// let num: number = u;
// let str2: string = n;
// Type 'undefined' is not assignable to type 'string'
// 以上代码可正常编译成功, 但是, 编译器会给出红线提示
var num2 = field;
