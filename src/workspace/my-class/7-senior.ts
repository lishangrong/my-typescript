/**
 * 构造函数
 * 
 */

class Greeter2 {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter2.standardGreeting;
        }
    }
}

// Greeter2类的实例的类型是 Greeter2
let greeter1: Greeter2;
greeter1 = new Greeter2();
console.log(greeter1.greet());

// 直接使用类。 我们创建了一个叫做 greeterMaker的变量。 这个变量保存了这个类或者说保存了类构造函数。
// 然后我们使用 typeof Greeter，意思是取Greeter类的类型，而不是实例的类型。
// 或者更确切的说，"告诉我 Greeter标识符的类型"，也就是构造函数的类型。 这个类型包含了类的所有静态成员和构造函数。 
let greeterMaker: typeof Greeter2 = Greeter2;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter2 = new greeterMaker();
console.log(greeter2.greet());


/**
 * 把类当做接口使用
 * 类定义会创建两个东西：类的实例类型和一个构造函数。 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。
 * 
 */
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};