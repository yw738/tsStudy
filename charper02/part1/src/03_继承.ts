(() => {

    class Animal {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
        sayHello() {
            console.log("动物在叫")
        }
    }

    /**
     * Dog extends Animal
     *     - 此时 Animal 被称为父类，Dog被称为子类
     *     - 使用继承过后，子类将继承父类所有的方法和属性
     *     - 通过继承可以将多个类共有的代码写在一个父类中
     *          这样就只写一次即可让所有的子类都同时拥有父类中的属性
     *          如果希望在子类中添加一些父类中没有的属性或方法 直接加在子类里面就可以了
     *     - 如果子类中添加父类中有的方法，将会覆盖父类的方法
     *          方法重写
    */
    // extends Animal 类
    class Dog extends Animal {
        sayHello() {
            console.log("汪汪汪")
        }
    }
    class Cat extends Animal {
        sayHello() {
            console.log("喵喵喵")
        }
    }
    let dog1 = new Dog('小黑', 15);
    let cat = new Dog('喵喵', 3);
    console.log(dog1)
    console.log(cat)

})()