let isFaild: boolean = false;

// const isTrue: boolean = new Boolean(1)
// 2:7 - error TS2322: Type 'Boolean' is not assignable to type 'boolean'.
//   'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
// 2 const isTrue: boolean = new Boolean(1)
// 执行会报以上错误, 编辑器也会提示 isTrue 预期类型和实际返回类型不同.

const isBoolean: boolean = Boolean(1);

const decimal: number = 10;
const hexadecimal: number = 0xf00d;
const notANumber: number = NaN;
const infinityNumber: number =  Infinity;

const str: string = 'koko';
const string: string = `i am ${str}`;

function returnVal(): void {
  console.log('i am a console without return');
}

let field: void = undefined;
// 如果赋值为 null, Type 'null' is not assignable to type 'void'

let u: undefined = undefined;
// u = null // Type 'null' is not assignable to type 'undefined'
let n: null = null;

// let num: number = u;
// let str2: string = n;
// Type 'undefined' is not assignable to type 'string'
// 以上代码可正常编译成功, 但是, 编译器会给出红线提示

// let num2: number = field;
// error TS2322: Type 'void' is not assignable to type 'number
// void 类型赋值给其他类型, 不允许报错

let anyVal: any = '1'
anyVal = 2
console.log(anyVal.myName)
console.log(anyVal.first.second)