(() => {
    /**
     * 以abstract开头的类是抽象类
     *     抽象类与其它类的区别不大
     *     只是不能用来创建对象，抽象类就是专门用来继承的类
     * 
     *     抽象类中可以添加抽象方法
    */
    abstract class Animal {
        name: string;

        constructor(name: string) {
            this.name = name
        }

        // 定义一个抽象方法
        // 抽象方法使用abstract开头，没有方法体
        // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重现
        abstract sayHello(): void;
    }


    class Dog extends Animal {
        age: number
        sayHello() {
            console.log('汪汪汪！')
        }
    }

    class Cat extends Animal {
        sayHello() {

        }
    }

    let dog1 = new Dog('小黑');
    dog1.sayHello()
    // let a = new Animal()
})()