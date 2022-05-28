// 
let a: 10;
a = 10;

// 可以使用 | 
let b: "male" | "female";
b = 'male'
b = 'female'

let c: boolean | string
c = true;
c = 'hello'

// 声明变量不赋值，ts解析器会自动判断的类型为any（隐式any）
// 使用ts的时候，不建议使用any
let d;
d = 10
d = 'hello'

// unknown 
let e: unknown
e = 10;
e = 'hello'
e = true

// unknown 就是安全类型的any
// unknown类型的变量，不能直接复制给其他变量
let s: boolean = false;
/**
 * 类型断言
 * 语法：
 * xx as string
 * <string>xx
*/
s = e as boolean
s = <boolean>e

//  void 表示没有返回值 
function fn(): void {

}

//  void 表示没有返回值 
function fn2(): never {
    throw new Error('报错了！');
}