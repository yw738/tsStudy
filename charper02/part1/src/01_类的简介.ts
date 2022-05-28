/**
 * 使用class关键字来定义一个类
*/

/**
 * 对象中主要包括了两个部分
 *      属性
 *      方法
*/
class Person {

    /**
     * 直接定义的属性是实例属性，需要用过对象的实例访问
     *      const per = new Person()
     *      per.name
     * 
     * 使用static开头的属性是静态属性(类属性)，可以直接通过类去调用
     *      Person.age
     * 
     * readonly 开头的属性，表示一个只读的属性，无法修改
    */
    name: string = "孙悟空";
    static age: number = 18;
    // readonly sex:string = '男'
    // readonly static sex:string = '男'

    // 定义方法
    static sayHello() {
        console.log('hello')
    }
}
const per = new Person();

console.log('实例',per)
console.log('类属性',Person.age)