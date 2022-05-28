(() => {

    // 定义一个表示人的类
    class Person {
        /**
         * public 修饰的属性可以在任意位置访问（修改） 默认值
         *     - 可以在任意位置访问，包括子类
         * private 私有属性，只能在类的内部进行访问（修改）
         *     - 可以通过在内添加方法，暴露修改私有属性的方法
         * protected 受包含的属性，只能在当前类或者是当前类的子类中访问（修改）
        */
        private _name: string
        private _age: number
        constructor(name: string, age: number) {
            this._name = name
            this._age = age
        }
        // TS 种设置 getter 方法的方式
        get name() {
            return this._name
        }
        set name(name: string) {
            this._name = name
        }
        get age() {
            return this._age
        }
        set age(age: number) {
            this._age = age
        }
    }

    const per = new Person('孙悟空', 18)

    /**
     * 现在属性是在对象中设置的，属性可以任意的被修改
     *  将会导致对象中的数据变得非常不安全
     *  所有与控制属性的修改，加以验证
    */

    // protected 受包含的属性,详情见上文
    class A {
        protected num: number
        constructor(num: number) {
            this.num = num
        }
    }

    class B extends A {
        test() {
            console.log(this.num)
        }
    }

    /**
     * 简写
    */
    class C {
        // 可以直接将属性定义在构造函数中
        // 必须加上修饰符，这种写法没有默认值
        constructor(private name: string, public age: number, protected gender: number | string) {
            this.name = name
            this.age = age
            this.gender = gender
        }
    }

    const c = new C('孙悟空', 18, '男')
    console.log(c)
})()