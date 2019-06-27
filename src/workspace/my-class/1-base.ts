/**
 * 面向对象的3大特性：
 * 1、封装：封装是面向对象的特征之一，是对象和类概念的主要特性。
 * 2、继承：继承是指这样一种能力：它可以使用现有类的所有功能，并在无需重新编写原来的类的情况下对这些功能进行扩展。
 *    通过继承创建的新类称为“子类”或“派生类”。 被继承的类称为“基类”、“父类”或“超类”。
 * 3、多态：允许将子类类型的指针赋值给父类类型的指针。 实现多态，有二种方式，覆盖，重载。
 *   覆盖，是指子类重新定义父类的虚函数的做法。
 *   重载，是指允许存在多个同名函数，而这些函数的参数表不同（或许参数个数不同，或许参数类型不同，或许两者都不同）。
 */

/**
 * 类的基本写法
 */
class Greeter {
    // 属性
    greeting: string;
    // 构造函数（构造器）
    constructor(message: string){
        // 引用任何一个类成员的时候都用了 this。 它表示我们访问的是类的成员。
        this.greeting = message;
    }
    // 方法
    geet() {
        return `Hello, ${this.greeting}`;
    }
}
// 使用 new构造了 Greeter类的一个实例。 它会调用之前定义的构造函数，创建一个 Greeter类型的新对象，并执行构造函数初始化它。
let greeter = new Greeter('typescript');
console.log(greeter.greeting);
console.log(greeter.geet());
