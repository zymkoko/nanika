// : 指定变量类型, 前后有无空格都可
function sayHello(person) {
    return 'hello' + person;
}
var user1 = 'koko';
console.log(sayHello(user1));
var user2 = [1, 2, 3];
console.log(sayHello(user2));
// 即使user2类型错误, 但执行tsc仍然可以编译出对应js文件
// 如要阻止, tsconfig.json 的 
