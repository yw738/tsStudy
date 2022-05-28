/**
 * 泛型
 * 在定义函数或是类时，如果遇到类型不明确的情况，可以使用泛型
*/

// T 是自己定义的变量，可以随便取
function fn<T>(a: T): T {
    return a
}

// 可以直接调用具有泛型的函数
let result = fn(1);//不指定泛型，会自动进行类型推断
let result2 = fn<string>('hello');//指定泛型

// 泛型可以指定多个
function fn2<T, K>(a: T, b: K): T {
    console.log(b)
    return a
}
fn2<number, string>(1, 'helo');

interface Inter {
    length: number
}

//  T extends Inter 表示泛型T必须是Inter实现类（子类）
function fn3<T extends Inter>(a: T): number {
    return a.length
}

class MyClass<T>{
    constructor(public name: T) {
        this.name = name
    }
}

const my = new MyClass<string>('孙悟空')