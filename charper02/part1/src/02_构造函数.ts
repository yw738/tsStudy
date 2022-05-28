class Dog {

    name: string;
    age: number;
    // constructor 被称为构造函数
    // 构造函数会在对象创建时调用
    constructor(name: string, age: number) {
        // 在实例方法中，this就表示当前实例
        // 在构造函数中的当前对象，就是当前新建的那个对象
        // 可以通过this向新建的对象中添加属性
        this.name = name
        this.age = age

    }
    break() {
        console.log("汪汪汪")
    }
}
let dog1 = new Dog('小黑', 15);
console.log(dog1)