// 类型

//  object 表示一个js对象

let a: object;
a = {}
a = function () { }

//  {} 用来指定对象中可以包含的那些属性
// 语法 ：{属性名：属性值，属性名：属性值}
// 属性名加一个？表示一个可选属性
let b: { name: string, age?: number };

b = {
    name: '孙悟空'
}

// [propName:string]:any 表示任意类型的属性
let c: {
    name: string,
    [propName: string]: any
}
c = {
    name: '八戒',
    age: 18
}

/**
 * 设置函数结构的类型声明
 * 语法：
 *      (形参：类型，形参：类型...)=>返回值
*/
let d: (a: number, b: number) => number
d = (n1, n2) => {
    return n1 + n2
}

/**
 * 数组的类型声明
 *      类型[]
 *      Array<string>
*/
let e: number[];
let f: Array<number>

/**
 * 元组，元组就是固定长度的数组
 *      语法：[类型，类型，类型] 
*/
let g: [string, number]
g = ['1', 1]

/**
 * 枚举
*/
enum Gender {
    Mail = 1,
    Femail = 0
}
let i: { name: string, gender: Gender }
i = {
    name: '孙悟空',
    gender: Gender.Mail
}
console.log(i.gender === Gender.Mail);

// & 表示同时
let j: { name: string } & { age: number };
j = {
    name: '孙悟空',
    age: 18
}

// 类型的别名
type myType = 1 | 2 | 3 | 4;
let k: myType;
let p: myType;
let l: myType;
k = 1;
p = 2;
l = 3