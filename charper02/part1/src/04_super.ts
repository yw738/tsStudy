(() => {

    class Animal {
        name: string;

        constructor(name: string) {
            this.name = name
        }
        sayHello() {
            console.log("动物在叫")
        }
    }


    class Dog extends Animal {
        age: number
        constructor(name: string, age: number) {
            // 如果子类写了构造函数，在子类构造函数中必须对父类进行调用
            super(name);//调用调用父类的构造函数
            this.age = age
        }
        sayHello() {
            // super.sayHello();
            // console.log(super)

        }
    }

    let dog1 = new Dog('小黑', 1);
    dog1.sayHello()

})()